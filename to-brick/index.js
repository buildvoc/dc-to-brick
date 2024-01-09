
const db = require('./db')

function createPromise (fun, ...args) {
  return new Promise((resolve, reject) => {
    const callback = (err) => {
      if (!err) {
        resolve()
      } else {
        reject(err)
      }
    }

    fun.apply(this, [...args, callback])
  })
}

function addTasks (tasks) {
  return createPromise(db.addTasks, tasks)
}

function addCollection (collection) {
  return createPromise(db.addCollections, [collection])
}

function addCollections (collections) {
  return createPromise(db.addCollections, collections)
}

function addItems (items) {
  return createPromise(db.addItems, items)
}

function addAll (tasks, collections, items, logging = false) {
  const log = (items, singular, plural) => {
    console.log(`Done adding ${items.length} ${items.length !== 1 ? plural : singular}`)
  }

  return new Promise((resolve, reject) => {
    addTasks(tasks)
      .then(() => {
        if (logging) {
          log(tasks, 'task', 'tasks')
        }

        return addCollections(collections)
      })
      .then(() => {
        if (logging) {
          log(collections, 'collection', 'collections')
        }
        return addItems(items)
      })
      .then(() => {
        if (logging) {
          log(items, 'item', 'items')
        }
        resolve()
      })
      .catch((err) => {
        if (logging) {
          console.error(`Error: ${err.message}`)
        }
        reject(err)
      })
  })
}

module.exports = {
  addTasks,
  addCollection,
  addCollections,
  addItems,
  addAll
}
