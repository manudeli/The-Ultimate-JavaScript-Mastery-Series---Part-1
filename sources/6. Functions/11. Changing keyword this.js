// 3 ways of Solution

// 1. const self = this; inside method
// 2. .bind(this) method
// 3. Arrow function

const video = {
  title: "title 입니다.",
  tags: ["a", "b", "c"],
  play() {
    console.log(this);
  },
  showTags() {
    this.tags.forEach(
      //   function (tag) {
      //     console.log(this.title, tag);
      //   }.bind(this) // See below ::: Solution :::
      (tag) => {
        console.log(this.title, tag);
      }
    );
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

//
// :::Solution:::
//

function playVideo(a, b) {
  console.log(this);
}

playVideo();
// 3 way to make solution
playVideo.call({ name: "Jonghyeon" }, 1, 2);
playVideo.apply({ name: "Jonghyeon" }, [1, 2]);
playVideo.bind({ name: "Jonghyeon" })();
