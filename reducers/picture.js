export default function(pictureList = [], action) {
    if(action.type == 'addPicture') {
        return [...pictureList, action.data];
    } else {
        return pictureList;
    }
}