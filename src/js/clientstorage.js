import {cfg} from "./cfg";
import {StorageEnums} from "./enums";

const storageLoc = localStorage;
const imageProgression = cfg.hardCodedProg.slice();

export function ClientStorage() {
    return {
        UUID: function(){
            if(!storageLoc.getItem(StorageEnums.UUID)){
                storageLoc.setItem(StorageEnums.UUID, 'xxx-xxx-xxx');
            }
            return storageLoc.getItem(StorageEnums.UUID);
        },
        initImageProgression: function initImageProgression(){
            storageLoc.setItem(StorageEnums.imageProg, JSON.stringify(imageProgression));
            return true;
        },
        nextImage: function nextImage(){
            let imageArrStr = storageLoc.getItem(StorageEnums.imageProg);
            let imageArr = JSON.parse(imageArrStr);
            let nextImage = imageArr.shift();
            storageLoc.setItem(StorageEnums.imageProg, JSON.stringify(imageArr));
            console.log("nextImage: ", nextImage);
            storageLoc.setItem(StorageEnums.currImg, nextImage);
            return nextImage ? nextImage : false;
        },
        getCurrImg: function getCurrImg(){
            let extractedCurrImg = storageLoc.getItem(StorageEnums.currImg);
            return extractedCurrImg ? extractedCurrImg : false;
        }   
    }
}