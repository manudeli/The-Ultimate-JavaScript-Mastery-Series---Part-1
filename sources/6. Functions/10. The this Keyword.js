// method -> object
// function -> global (window, global)

const video = {
  title: "title 입니다.",
  tags: ["a", "b", "c"],
  play() {
    console.log(this);
  },
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this); // we can throw thisArg in function
    // But, ::Problem:: Not all method have the abilty to pass the thisArg
  },
};

function playVideo() {
  console.log(this);
}

video.play();
playVideo();

function Video(title) {
  this.title = title;
  console.log(this);
}

const v = new Video("hihi"); // {}
video.showTags();
