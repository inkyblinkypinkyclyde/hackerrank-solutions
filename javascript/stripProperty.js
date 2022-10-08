function stripProperty(obj, prop) {
    if (!obj[prop]) return (obj);
    delete obj[prop]
    return (obj);
}