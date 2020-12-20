import {cfg} from "./cfg";
import {StorageEnums} from "./enums";

const storageLoc = localStorage;
const imageProgression = cfg.hardCodedProg.slice();

export function ClientStorage() {
    return {
        UUID: function(uuid){
            if(!storageLoc.getItem(StorageEnums.UUID)){
                storageLoc.setItem(StorageEnums.UUID, uuid);
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
            let nextExtractedImage;
            if(imageArr.length){
                nextExtractedImage = imageArr.shift();
                storageLoc.setItem(StorageEnums.imageProg, JSON.stringify(imageArr));
                storageLoc.setItem(StorageEnums.currImg, nextExtractedImage);
            } else{
                storageLoc.setItem(StorageEnums.currImg, "")
            }
            return nextExtractedImage ? nextExtractedImage : false;
        },
        getCurrImg: function getCurrImg(){
            let extractedCurrImg = storageLoc.getItem(StorageEnums.currImg);
            return extractedCurrImg ? extractedCurrImg : false;
        }   
    }
}