import { Component, OnInit } from "@angular/core";

interface ImageData {
  src: string;
  width: string;
  alt:string;
}

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"],
})
export class GalleryComponent implements OnInit {
  selectedImageIndex: number = 0;
  touchStartX = 0;
  touchEndX = 0;
  numArray = Array(2).fill(0).map((x, i) => i);

  imgArray: Array<ImageData> = [

    {
      src:
        "/assets/images/webp/ceremony.webp",
      width: "w-1/2",
      alt:"Ceremony Seating under oak tree"
    },
    // {
    //   src:
    //     "/assets/images/webp/patio.webp",
    //   width: "w-1/2",
    //   alt:"String lit patio with wedding barn background"
    // },
    {
      src:
        "/assets/images/webp/barn-door-view.webp",
      width: "w-full",
      alt:"Barn door view of wedding barn"
    },
    {
      src:
        "/assets/images/webp/zoomed-in-rafter.webp",
      width: "w-full",
      alt:"Close up view of rafters and chandeliers"
    },
    {
      src:
        "/assets/images/webp/interior.webp",
      width: "w-1/2",
      alt:"Interior view of wedding barn with setup for reception"
    },
    {
      src:
        "/assets/images/webp/family.webp",
      width: "w-1/2",
      alt:"Breaking ground photo of wedding barn family"
    },
  ];

  ngOnInit(): void {
    document.addEventListener("keyup", (event) => {
      if (event.key == "ArrowLeft") {
        this.nextImage(-1);
      } else if (event.key == "ArrowRight") {
        this.nextImage(1);
      }
    });
    document.getElementById("myModal").addEventListener(
      "touchstart",
      (event) => {
        this.touchStartX = event.changedTouches[0].clientX;
      },
    );
    document.getElementById("myModal").addEventListener("touchend", (event) => {
      this.touchEndX = event.changedTouches[0].clientX;
      var diffPixels = this.touchStartX - this.touchEndX;
      if (diffPixels > 0 && diffPixels > screen.width * .3) {
        this.nextImage(1);
      } else if (diffPixels < 0 && (diffPixels * -1) > screen.width * .3) {
        this.nextImage(-1);
      }
    });
  }

  imageClick(loop: number, index: number) {
    this.selectedImageIndex = (loop == 0) ? index : 3 + index;
    this.assignImageToModal(this.selectedImageIndex);
  }

  assignImageToModal(index: number) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01") as HTMLImageElement;
    var captionText = document.getElementById("caption");
    modal.style.display = "flex";
    modal.style.flexDirection="column";
    modalImg.src = this.imgArray[index].src;
    captionText.innerHTML = this.imgArray[index].alt;
  }

  nextImage(positionChange: number) {
    if (positionChange > 0) {
      this.selectedImageIndex =
        (this.selectedImageIndex + positionChange <= this.imgArray.length - 1)
          ? this.selectedImageIndex + positionChange
          : 0;
    } else if (positionChange < 0) {
      this.selectedImageIndex = (this.selectedImageIndex + positionChange < 0)
        ? this.imgArray.length - 1
        : this.selectedImageIndex + positionChange;
    }
    this.assignImageToModal(this.selectedImageIndex);
  }

  imageNav(event: MouseEvent) {
    let xpos = event.clientX;
    var modal = document.getElementById("myModal");
    var leftSide = modal.clientWidth * .4;
    var rightSide = (modal.clientLeft + modal.clientWidth) * .6;

    if (xpos >= rightSide) {
      this.nextImage(1);
    }
    if (xpos <= leftSide) {
      this.nextImage(-1);
    }
  }

  close() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
}
