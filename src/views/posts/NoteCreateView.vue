<template>
  <div class="sound-file-div">
    <span style="color: white;">음성파일을 등록하세요</span>
    <div style="margin-top: 10px;">
        <input  type="file" style="border-radius: 10px;"></input>
    </div>
    <div style="margin-top: 10px;">
        <button v-if="!isUploadComplete" type="button" class="btn btn-secondary" @click="onUploadSoundFile">업로드하기</button>
        <button v-if="isUploadComplete && !isConvertComplete"  type="button" class="btn btn-dark" @click="onConvert">변환하기</button>
    </div>
  </div>
  
  <br></br>
  <div v-if="isConvertComplete" class="note-regist-content-div">
    <div>
        <label>제목</label>
        <input type="text" style="margin-left: 10px;border-radius: 8px;"></input>
    </div>
    <div style="margin-top: 10px;">
        <label>날짜</label>
        <input type="text" style="margin-left: 10px;border-radius: 8px;"></input>
    </div>
    <div style="margin-top: 10px;" class="note-content-div">
        <label style="font-size: 20px;">회의내용</label>
        <div style="margin-top: 10px;">
            <div v-for="convertObj in convertData" class="speaker-message-div">
                <div class="speaker-div">{{ convertObj.speaker }}</div>
                <div class="message-div">{{ convertObj.message }}</div>
            </div>
        </div>
        <div><NoteTextContent></NoteTextContent></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NoteTextContent from './NoteTextContent.vue';
import { uploadSoundFile, convertToText } from '@/api/post'

const isUploadComplete = ref(false);
const isConvertComplete = ref(false);
const convertData = ref([]);

const onUploadSoundFile = async () => {
    const result = await uploadSoundFile();
    
    if(result.data.code == '200') {
        alert('업로드 완료')
        isUploadComplete.value= true;
    }
}

const onConvert = async () => {
    const result = await convertToText();
    if(result.data.code == '200') {
        alert("변환 완료");
        isConvertComplete.value =true;
    }
    
    console.log(result.data.data.script);
    convertData.value = result.data.data.script;
}



</script>

<style scoped>
.sound-file-div {
    width: 500px;
    height: 140px;
    background-color: gray;
    padding-top: 10px;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
}
.note-regist-content-div{
    display: flex;
    flex-direction: column;
}
.speaker-message-div {
    display: flex;
    background-color: rgb(224, 231, 239);
    border-radius: 8px;
    margin-top: 10px;

}

.note-content-div{
    background-color: rgb(180, 205, 235);
    border-radius: 8px;
    padding-left: 10px;
    padding-top: 10px;
    padding-right: 10px;
    height: 500px;
}

.message-div {
    margin-left: 10px;
}
</style>
