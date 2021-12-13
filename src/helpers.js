// This file should export two array helper functions:
// choice(items): returns a randomly selected item from array of items
// remove(items, item): removes the first matching item from items, if item exists, and returns it. 
// Otherwise returns undefined.

const choice = (items) => {
    const max = items.length;
    const ind = Math.floor(Math.random() * max);
    return items[ind];
}

const remove = (items, item) => {
    const res = items.indexOf(item);
    if (res !== -1) {
        items.splice(res,1);
        return item;
    }
}

export {choice, remove};