<template>
  <div class="sound-file-div" v-if="!isConvertComplete">
    <span style="color: white;">파일업로드를 통해 음성기록을 만들어보세요.</span>
    <div style="margin-top: 10px;">
        <input  type="file" style="border-radius: 10px;"></input>
    </div>
    <div style="margin-top: 10px;">
        <button v-if="!isUploadComplete" type="button" class="btn btn-secondary" @click="onUploadSoundFile">업로드하기</button>
        <button v-if="isUploadComplete && !isConvertComplete"  type="button" class="btn btn-dark" @click="onConvert">변환하기</button>
    </div>
  </div>
  
  
  <div v-if="isConvertComplete" class="note-regist-content-div">
    <div>
        <label>제목</label>
        <input type="text" style="margin-left: 10px;border-radius: 8px;"></input>
    </div>
    <div style="margin-top: 10px;">
        <label>회의일자</label>
        <input type="Date" style="margin-left: 10px;border-radius: 8px;"></input>
    </div>
    <div style="margin-top: 10px;">
        <label>참석자</label>
        <input type="text" style="margin-left: 10px;border-radius: 8px;"></input>
    </div>
    <div style="margin-top: 10px;">
        <label>음성기록</label>
    </div>
    <div style="margin-top: 10px;" class="note-content-div">
        <div style="display: flex;justify-content: space-between;">
            <label style="font-size: 20px;">회의내용</label>
            <button class="edit-button" @click="editNoteContent">{{ isEditing ? '완료' : '편집' }}</button>
        </div>
        <div style="margin-top: 10px;">
            <div v-for="convertObj in convertData" class="speaker-message-div">
                <div class="speaker-div">
                    <input class="speaker-input" type="text" :value="convertObj.speaker" :readonly="isSpeakerReadOnly"></input>
                </div>
                <div class="message-div">
                    <textarea class="message-textarea" :readonly="isMessageReadonly">{{ convertObj.message }}</textarea>    
                </div>
            </div>
        </div>
        <div><NoteTextContent></NoteTextContent></div>
    </div>
  </div>
</template>

<script setup>
import { computed, readonly, ref } from 'vue';
import NoteTextContent from './NoteTextContent.vue';
import { uploadSoundFile, convertToText } from '@/api/post'

const isUploadComplete = ref(false);
const isConvertComplete = ref(false);
const convertData = ref([]);
const isSpeakerReadOnly = ref(true);
const isEditing = ref(false);

const isMessageReadonly = computed(() => {
    if(isEditing.value) {
        return false;
    }else {
        return true;
    }
});

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

const editNoteContent = () => {
    isSpeakerReadOnly.value = false;
    if(isEditing.value) {
        isEditing.value = false;
    } else {
        isEditing.value = true;
    }
    
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
    margin-bottom: 10px;
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

.speaker-input {
    width: 40px;
    border: none;
    border-radius: 8px;
}

.edit-button {
    border: none;
    border-radius: 8px;
    background-color: beige;
    
}

.message-textarea {
    width: 400px;
    border:none;
    border-radius: 8px;
    padding-top: 10px;
    padding-left: 5px;
    
}
</style>
