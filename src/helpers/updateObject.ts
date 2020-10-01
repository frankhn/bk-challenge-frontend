export default (oldObject: any, updatedProperties: any) => ({
    ...oldObject,
    ...updatedProperties,
});
