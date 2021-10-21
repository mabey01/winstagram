import {createReadStream, createWriteStream, mkdir, ReadStream} from 'fs';
import {createInterface} from 'readline'
import {get} from 'https'

const DATASET_FILE = 'photos-dataset.tsv'
const PHOTOS_DIRECTORY = './photos2'

async function batchProcessArray (arr, process, concurrency = 20) {
  let i = 0
  let results = []
  while (i < arr.length) {
    console.log(`process next batch ${i} - ${i + concurrency - 1}`)
    const batch = arr.slice(i, i + concurrency)
    const newResults = await Promise.all(batch.map(process))
    results.push(...newResults)

    i += concurrency;
  }

  return results
}

/**
 * @typedef ImageObject
 * @type {object}
 * @property {string} id - an ID.
 * @property {string} photoURL - your name.
 * @property {string} photoImageURL - your age.
 * @property {number} submittedAt - your age.
 */

/**
 * 
 * @param {ImageObject} image 
 */
 function getImageFileName(image) {
  const imageDate = new Date(image.submittedAt)
  const year = imageDate.getFullYear()
  const month = (imageDate.getMonth() + 1).toString().padStart(2, '0')
  const day = (imageDate.getDate()).toString().padStart(2, '0')

  const imageName = `${year}-${month}-${day}_${image.id}`
  return imageName
}

/**
 * 
 * @param {ImageObject} image
 */
async function downloadImage (image) {
  const file = createWriteStream(`${PHOTOS_DIRECTORY}/${getImageFileName(image)}.jpg`);

  return new Promise((resolve, reject) => {
    const request = get(image.photoImageURL, function(response) {
      response.pipe(file);
    });

    request.on('close', resolve)
    request.on('error', resolve)
  })
}

/**
 * 
 * @param {string} lineInDataset 
 * @returns {ImageObject}
 */
function getImageFromLine(lineInDataset) {
  const [id, photoURL, photoImageURL, submittedAt, ] = lineInDataset.split('\t')

      return {
        id,
        photoURL,
        photoImageURL,
        submittedAt: new Date(submittedAt).getTime()
      }
}

/**
 * 
 * @param {ReadStream} stream
 */
async function parseImages(stream) {
  const rl = createInterface({
    input: stream,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  /**
   * @type {ImageObject[]}
   */
  let images = []
  for await (const line of rl) {
    images.push(getImageFromLine(line))
  }

  return images.slice(1)
}

mkdir(PHOTOS_DIRECTORY, async () => {
  const readable = createReadStream(DATASET_FILE, {encoding: 'utf8'});

  const images = await parseImages(readable, 100);
  console.log(`${images.length} images parsed`)

  const partialImages = images.slice(0, 500)

  console.log(`${partialImages.length} images started downloading`)
  await batchProcessArray(partialImages, downloadImage)
  console.log('finished')
})