<template>
  <div>등록</div>
  <br></br>
  <div>음성파일을 등록하세요</div>
  <div>
    <input type="file"></input>
    <button v-if="!isUploadComplete" type="button" class="btn btn-secondary" @click="onUploadSoundFile">업로드하기</button>
    <button v-if="isUploadComplete" type="button" class="btn btn-dark">변환하기</button>
  </div>
  <br></br>
  <div v-if="isConvertComplete">
    <div>
        <label>제목</label>
        <input type="text"></input>
    </div>
    <div>
        <label>날짜</label>
        <input type="text"></input>
    </div>
    <div>
        <label>회의내용</label>
        <div><NoteTextContent></NoteTextContent></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NoteTextContent from './NoteTextContent.vue';
import { uploadSoundFile } from '@/api/post'

const isUploadComplete = ref(false);
const isConvertComplete = ref(false);

const onUploadSoundFile = async () => {
    const result = await uploadSoundFile();
    
    if(result.data.code == '200') {
        alert('업로드 완료')
        isUploadComplete.value= true;
        
    }
    
}



</script>

<style lang="scss" scoped></style>
