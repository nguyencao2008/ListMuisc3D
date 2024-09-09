const $=document.querySelector.bind(document)
const $$=document.querySelectorAll.bind(document)

    // Task
    // 1. Thêm vào Ablum các cái bài hát-->Oke
    // 
    // 2. next và skew bài hát Ablum
    // 3. Play and pause bài hát-->oke

// Khai báo
const AblumImg=$(".albumImg")
const Ablum=$(".album")
const UlList=$("ul")
const Audio=$(".audio")
const NameMusic=$(".singerName span")
const SingerMusic=$(".singerName p")
const PlayMusic=$("#play")
const PlayIcon=$(".bnt-action #play")
const BntMusic=$(".bnt-action")
const PlaySpan=$(".bnt-action span")
const SkewMusic=$("#skew")
const NextMusic=$("#next")
const RepeatMusic=$("#back")
const AutoMusic=$("#random")
const LimeTime=$(".line")
const LimeTimeMusic=$(".time")
const StartTimeMusic=$(".timeStart")
const EndTimeMusic=$(".timeEnd")
const MeunuModify=$(".menuMusic")
const DisplayIconMusic=$(".musicImg-icon")
// console.log(PlayMusic)
// console.log(Ablum)
// console.log(UlList)
// console.log(LimeTimeMusic)
// console.log(PlayIcon)

var index=0
//Run
const app={
    songsImg:[],
    songsList:[
        {
            name:"Thiên Lý Ơi",
            path:"Resoures/thienlyoiimg.jpg",
            arthur:"Jack - J97",
            audio:"Music/thienlyoi.mp3"
        },
        {
            name:"Bạc Phận",
            path:"Resoures/bacphanimg.jpg",
            arthur:"Jack x ICM",
            audio:"Music/bacphan.mp3"
        },
        {
            name:"Đom Đóm",
            path:"Resoures/domdomimg.jpg",
            arthur:"Jack - J97",
            audio:"Music/domdom.mp3"
        },
        {
            name:"Chúng Ta Rồi Sẽ Hạnh Phúc",
            path:"Resoures/chungtaroisehanhphucimg.jfif",
            arthur:"Jack - J97",
            audio:"Music/chungtaroisehanhphuc.mp3"
        },
        {
            name:"Hoa Hải Đường",
            path:"Resoures/hoahaiduong.jpg",
            arthur:"Jack - J97",
            audio:"Music/hoahaiduong.mp3"
        },
        {
            name:"Hoa Vô Sắc",
            path:"Resoures/hoavosac.jpg",
            arthur:"Jack x ICM",
            audio:"Music/hoavosac.mp3"
        },
        {
            name:"Sao Em Vô Tình",
            path:"Resoures/saoemvotinh.jpg",
            arthur:"Jack x ICM ft. LIAM",
            audio:"Music/saoemvotinh.mp3"
        },
        {
            name:"Cuối Cùng Thì",
            path:"Resoures/cuoicungthi.jpg",
            arthur:"Jack - J97",
            audio:"Music/cuoicungthi.mp3"
        },
        {
            name:"Là 1 Thằng Con Trai",
            path:"Resoures/la1thangcontrai.jpg",
            arthur:"Jack - J97",
            audio:"Music/la1thangcontrai.mp3"
        },
        {
            name:"Em Gì Ơi",
            path:"Resoures/emgioi.jpg",
            arthur:"Jack x ICM",
            audio:"Music/emgioi.mp3"
        },
        {
            name:"Sóng Gió",
            path:"Resoures/songgioimg.jpg",
            arthur:"Jack x ICM",
            audio:"Music/songgio.mp3"
        },
        {
            name:"Laylalay",
            path:"Resoures/laylalay.jpg",
            arthur:"Jack - J97",
            audio:"Music/laylalay.mp3"
        },
        {
            name:"Hồng Nhan",
            path:"Resoures/hongnhan.jpg",
            arthur:"Jack x G5R",
            audio:"Music/hongnhan.mp3"
        },
        {
            name:"Mẹ Ơi 2",
            path:"Resoures/meoi2.jpg",
            arthur:"Jack x G5R",
            audio:"Music/meoi2.mp3"
        },
        {
            name:"Về Bên Anh",
            path:"Resoures/vebenanh.jpg",
            arthur:"Jack x G5R",
            audio:"Music/vebenanh.mp3",
        },

    ],
    songsName:[],
    songsAudio:[],
    //Thêm bài hát vô innnerHTML
    render:function(){
        if(this.songsImg.length==0){
            MeunuModify.style.display="none"
        }else{
            MeunuModify.style.display="flex"
        }
        const htmlsListMusic=this.songsImg.map(songsImg=>{
            return `
                <div class="album-img">
                    <div class="album-img__remove"><i class="fa-solid fa-xmark"></i></div>
                    <img src=${songsImg.path} >
                </div>
            `
        })
        const htmlsPlayList=this.songsList.map((songsList)=>{
            return`
                <li>
                    <div><i class="fa-solid fa-music" style="color: #ffffff;"></i></div>
                    <div class="listImg"><img src=${songsList.path} ></div>
                    <div class="listName">
                        <span>${songsList.name}</span>
                        <a href="https://vi.wikipedia.org/wiki/Jack_%E2%80%93_J97" target="_blank"><p>${songsList.arthur}</p></a>
                    </div>
                    <div class="Album-singer">${songsList.name} (Single)</div>
                    <div class="li-icon">
                        <div class="add-icon">
                            <span class="tooltips">Thêm vào Playlist</span>
                            <i id="icon" class="fa-solid fa-heart-circle-plus"></i>
                        </div>
                        <div class="diffirent-icon">
                            <span class="tooltips">Khác</span>
                            <i id="icon" class="fa-solid fa-ellipsis"></i>
                        </div>
                    </div>
                </li>
            `
        })
        Ablum.innerHTML=htmlsListMusic.join('')
        UlList.innerHTML=htmlsPlayList.join('')
        
        // console.log(this.songsImg)
        // console.log(this.songsName)
        // console.log(this.songsAudio)
        this.escape()
        this.Add()
        // this.ModifyImg()
        this.handleEVent()
    },
    //xóa phần tử trong innerHtMl
    escape:function(){
        var removeMusic=$$(".album-img__remove")
        var AddList=$$(".album-img img")
        // console.log(removeMusic)
        // console.log(AddList)
        for(let i=0;i<removeMusic.length;i++){
            removeMusic[i].onclick=()=>{
                var PushList={
                    name:this.songsName[i].name,
                    path:AddList[i].src,
                    arthur:this.songsName[i].arthur,
                }
                this.songsList.push(PushList)
                this.songsImg.splice(i,1)
                this.songsName.splice(i,1)
                this.songsAudio.splice(i,1)
                this.render()
            }
        }
    },
    // Xử lí hình ảnh của SongImg
    ModifyImg:function(CenterImg,index){
        var AddList=$$(".album-img")
        var TranslateImg=this.songsImg.length
        // var CenterImg=Math.floor(this.songsImg.length/2.1)
        if(index==undefined){
            CenterImg=CenterImg
            index=0
        }else{
            CenterImg+=index
        }
        // console.log("Gia tri index",index)
        // console.log(CenterImg)
        // console.log(TranslateImg)
        if(TranslateImg%2==0&&TranslateImg!=0){
            AblumImg.style.transform=`translateX(${190.5/2}px)`
        }else{
            AblumImg.style.transform=`translateX(${0}px)`
        }
        function position(x){
            if(x==0){
                return x
            }else{
                return x+1
            }
        }
        for(let i=-CenterImg;i<0;i++){
            AddList[i+CenterImg].style.transform=
            `translateX(${-index*193.5}px) perspective(800px) rotateY(${(-(i-1)*10)}deg)`
        }
        for(let i=0;i<TranslateImg-CenterImg;i++){
            AddList[i+CenterImg].style.transform=
            `translateX(${-index*193.5}px) perspective(800px) rotateY(${(-(position(i))*10)}deg)`
        }
        if(this.songsName.length!=0&&CenterImg!=undefined){
            this.NameMusic(CenterImg)
        }
        if(this.songsAudio.length!=0&&CenterImg!=undefined){
            this.AudioMuisc(CenterImg)
        }
    },
    // Xử lí hình ảnh khi next
    NextImg:function(){
        var CenterImg=Math.floor(this.songsImg.length/2.1)
        index+=1
        this.ModifyImg(CenterImg,index)
        Audio.play()
    },
    // Xử lí khi next auto
    AutoNextImg:function(){
        var CenterImg=Math.floor(this.songsImg.length/2.1)
        index+=Math.floor(Math.random()*(this.songsImg.length-CenterImg))
        this.ModifyImg(CenterImg,index)
        Audio.play()
    },
    // Xử lí khi mà ta Skew hình ảnh
    SkewImg:function(){
        var CenterImg=Math.floor(this.songsImg.length/2.1)
        index-=1
        this.ModifyImg(CenterImg,index)
        Audio.play()
    },
    // Xử lí khi skew auto
    AutoSkewImg:function(){
        var CenterImg=Math.floor(this.songsImg.length/2.1)
        index-=Math.floor(Math.random()*(this.songsImg.length-CenterImg))
        this.ModifyImg(CenterImg,index)
        Audio.play()
    },
    // Xử lí thay audio
    AudioMuisc:function(CenterImg){
        Audio.src=this.songsAudio[CenterImg].audio
    },
    // Xử lí thay tên singer
    NameMusic:function(CenterImg){
        NameMusic.textContent=this.songsName[CenterImg].name
        SingerMusic.textContent=this.songsName[CenterImg].arthur
    },
    // Xử lí khi mà ta Add hình ảnh
    Add:function(){
        var CenterImg=Math.floor(this.songsImg.length/2.1)
        this.ModifyImg(CenterImg)
    },
    // Xử lí thanh thời gian
    LimeTime:function(){
        Audio.ontimeupdate=()=>{
            var currentTime=Audio.currentTime
            var duration=Audio.duration
            var LineChange=(currentTime/duration)*300
            LimeTimeMusic.style.width=`${LineChange}px`;
            if(currentTime==duration&&this.songsImg.length!=1&&RepeatMusic.style.color=='white'){
                this.NextImg()
            }
            this.TimeStart(currentTime)
            this.TimeEnd(duration)
            this.TimeRewind(duration)
        }
    },
    //Xử lí số 0 khi thời gian nhỏ hơn 10
    TimeHandle:function(x){
        if(x<10){return `0${x}`}else{return x}
    },
    //Xử lí timeStart
    TimeStart:function(currentTime){
        var minute=Math.floor(currentTime/60)
        var second=Math.floor(currentTime%60)
        StartTimeMusic.textContent=
        `${this.TimeHandle(minute)}:${this.TimeHandle(second)}`
    },

    // Xử lí time End
    TimeEnd:function(duration){
        var minute=Math.floor(duration/60)
        var second=Math.floor(duration%60)
        if(Number.isNaN(minute)){minute=0}
        if(Number.isNaN(second)){second=0}
        EndTimeMusic.textContent=
        `${this.TimeHandle(minute)}:${this.TimeHandle(second)}`
    },
    // Xử lí khi tua thanh thời gian
    TimeRewind:function(duration){
        LimeTime.onclick=(e)=>{
            var Width=LimeTime.clientWidth;
            var ClickX=e.offsetX
            Audio.currentTime=(ClickX/Width)*duration
            LimeTimeMusic.style.width=`${ClickX}px`
        }
    },
    // Xử lí ClickPlay bài hát
    Play:function(){
        var runningMusic=true;
        document.addEventListener("keydown", function(e) {
            e.preventDefault()
            if (e.code ==="Space") {
                if (runningMusic == true) {
                    Audio.play();
                } else {
                    Audio.pause();
                }
            }
        })
        PlayMusic.onclick=()=>{
            if(runningMusic==true){Audio.play()}
            else{Audio.pause()}
        }
        BntMusic.onclick=()=>{
            if(runningMusic==true){Audio.play()}
            else{Audio.pause()}
        }
        //xử lí khi Play bài hát
        Audio.onplay=()=>{
            runningMusic=false
            PlayMusic.classList.replace("fa-play","fa-pause")
            PlayIcon.classList.replace("fa-play","fa-pause")
            PlaySpan.textContent="TẠM DỪNG"
            DisplayIconMusic.style.display='block'
        }
        // Xử lí Pause bài hát
        Audio.onpause=()=>{
            runningMusic=true
            PlayMusic.classList.replace("fa-pause","fa-play")
            PlayIcon.classList.replace("fa-pause","fa-play")
            PlaySpan.textContent="TIẾP TỤC PHÁT"
            DisplayIconMusic.style.display='none'
        }
    },
    // Xử lí khi bấm nút Repeat
    Repeat:function(){
        setInterval(function(){
            RepeatMusic.onclick=()=>{
                if(RepeatMusic.style.color=='white'){
                    RepeatMusic.style.color='#9b4de0'
                }else{
                    RepeatMusic.style.color='white'
                }
            }
           if(RepeatMusic.style.color=='rgb(155, 77, 224)'&&Audio.duration==Audio.currentTime){
                Audio.play()
           }
        },1000)
    },
    // Xử lí xự kiện auto
    Auto:function(){
        setInterval(function(){
            AutoMusic.onclick=()=>{
                if(AutoMusic.style.color=='white'){
                    AutoMusic.style.color='#9b4de0'
                }else{
                    AutoMusic.style.color='white'
                }
            }
           if(AutoMusic.style.color=='rgb(155, 77, 224)'&&Audio.duration==Audio.currentTime){
                
           }
        },1000)
    },
    // Xử lí xự kiện active
    // Xử lí các sự kiện 
    handleEVent:function(){
        var ActiveLi=$$("li")
        var AddMusic=$$(".add-icon")
        var SrcIMg=$$(".listImg img")
        var NameList=$$(".listName span")
        var ArthurList=$$(".listName p")
        // var LiMusic=$$("li")
        // console.log(NameList)
        // console.log(ArthurList)
        //Xử lí thêm bài hát
        for(let i=0;i<AddMusic.length;i++){
            AddMusic[i].onclick=()=>{
                var PushMusic={path:SrcIMg[i].src};
                this.songsImg.push(PushMusic);
                this.songsName.push({
                    name:NameList[i].innerText,
                    arthur:ArthurList[i].innerText
                })
                this.songsAudio.push({
                    audio:this.songsList[i].audio
                })
                this.songsList.splice(i,1)
                this.render();
            }
        }

        //Xử lí sự kiện khi bấm next bài hát
        NextMusic.onclick=()=>{
            if(this.songsImg.length!=1){
                if(AutoMusic.style.color=="rgb(155, 77, 224)"){
                    this.AutoNextImg()
                }else{
                    this.NextImg()
                }
            }
        }
        //Xử lí sự kiện khi bấm Skew bài hát
        SkewMusic.onclick=()=>{
            if(this.songsImg.length!=1){
                if(AutoMusic.style.color=="rgb(155, 77, 224)"){
                    this.AutoSkewImg()
                }else{
                    this.SkewImg()
                }
            }
        }
        //Xử lí khi click active li
        for(let i=0;i<ActiveLi.length;i++){
            ActiveLi[i].onclick=()=>{
                for(let i=0;i<ActiveLi.length;i++){
                    ActiveLi[i].classList.remove("active")
                    ArthurList[i].classList.remove("activeTextColor")
                }
                ActiveLi[i].classList.add("active")
                ArthurList[i].classList.add("activeTextColor")
            }
        }
        RepeatMusic.onclick=()=>{
            this.Repeat()
        }
    },
    //Chạy chương trình
    Run:function(){
        this.render();
        this.escape();
        // this.ModifyImg();
        this.LimeTime();
        // this.Repeat();
        this.Auto();
        this.Play();
        this.handleEVent();
    },
}
app.Run()