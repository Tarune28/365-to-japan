// Imports
import {
  LeftCircleFilled,
  LeftCircleOutlined,
  LeftOutlined,
  RightCircleOutlined,
  RightOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Card, Modal } from "antd";
import { useState } from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import ReactDOM from "react-dom";
import "./HomeBanner.css";

// Images
import award from "./img/365tojapan.png";
import image1 from "../../img/home/cover-images/416B2A12-AB00-4FC4-9EB5-E633297FB8C2.jpg"
import image2 from "../../img/home/cover-images/IMG_9258.jpg"
import image3 from "../../img/home/cover-images/IMG_9280.jpg"
import image4 from "../../img/home/cover-images/IMG_9335.jpg"
import image5 from "../../img/home/cover-images/IMG_9360.jpg"
import image6 from "../../img/home/cover-images/IMG_9373.jpg"
import image7 from "../../img/home/cover-images/IMG_9403.jpg"
import image8 from "../../img/home/cover-images/IMG_9408.jpg"
import image9 from "../../img/home/cover-images/IMG_9522.jpg"
import image10 from "../../img/home/cover-images/IMG_9557.jpg"
import image11 from "../../img/home/cover-images/IMG_9676.jpg"
import image12 from "../../img/home/cover-images/IMG_9840.jpg"

function HomeBanner() {
  let [showModal, setShowModal] = useState(false);

  function showEventModal() {
    setShowModal(true);
  }

  function hideEventModal() {
    setShowModal(false);
  }

  return (
    <>
      <section className="home_banner_area" style={{ background: "#fff" }}>
        <div className="banner_inner d-flex align-items-center">
          <div className="container">
            <div
              className="col-lg-12"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <svg
                className="svg"
                version="1.1"
                id="text"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 1400 237.6"
                fill="white"
                // style={{ enableBackground: "new 0 0 1400 237.6;" }}
                xmlSpace="preserve"
              >
                <path
                  className="st3"
                  d="M 0 136.531 L 26.5 136.531 A 52.237 52.237 0 0 0 29.181 149.288 Q 36.014 168.281 58.25 168.281 Q 66.75 168.281 74.375 164.031 Q 82 159.781 86.875 152.781 A 26.993 26.993 0 0 0 91.006 143.879 A 25.02 25.02 0 0 0 91.75 137.781 A 82.4 82.4 0 0 0 91.219 128.07 Q 89.937 117.31 85.564 111.14 A 20.325 20.325 0 0 0 83.25 108.406 A 24.65 24.65 0 0 0 74.893 103.141 Q 67.53 100.227 56.5 100.044 A 90.136 90.136 0 0 0 55 100.031 L 55 80.031 A 73.267 73.267 0 0 0 63.672 79.555 Q 73.405 78.391 78.943 74.382 A 18.175 18.175 0 0 0 81.25 72.406 A 21.287 21.287 0 0 0 85.672 65.457 Q 88.329 58.979 88.692 49.022 A 88.925 88.925 0 0 0 88.75 45.781 A 28.173 28.173 0 0 0 87.267 36.41 A 23.222 23.222 0 0 0 77.75 24.531 A 34.678 34.678 0 0 0 65.194 19.902 A 45.949 45.949 0 0 0 57.5 19.281 A 24.147 24.147 0 0 0 35.894 31.185 Q 31.201 38.569 29 50.531 L 3.75 50.531 A 81.771 81.771 0 0 1 8.918 29.634 Q 21.016 0.031 57 0.031 A 78.255 78.255 0 0 1 72.004 1.405 A 59.036 59.036 0 0 1 86.75 6.281 A 53.701 53.701 0 0 1 99.239 14.629 A 46.069 46.069 0 0 1 106.625 23.156 A 42.245 42.245 0 0 1 113.704 45.349 A 51.673 51.673 0 0 1 113.75 47.531 A 71.38 71.38 0 0 1 112.141 63.232 Q 108.257 80.444 95 89.281 Q 99.721 92.286 103.061 95.198 A 44.018 44.018 0 0 1 104.125 96.156 A 49.331 49.331 0 0 1 106.396 98.403 Q 107.435 99.505 108.246 100.53 A 21.11 21.11 0 0 1 109.5 102.281 A 41.605 41.605 0 0 1 113.918 112.5 Q 116.75 122.188 116.75 135.781 A 48.715 48.715 0 0 1 112.811 155.435 A 47.054 47.054 0 0 1 109.125 162.281 A 52.294 52.294 0 0 1 89.977 179.807 A 62.383 62.383 0 0 1 88.125 180.781 A 62.666 62.666 0 0 1 67.903 186.872 A 79.747 79.747 0 0 1 57.5 187.531 A 78.971 78.971 0 0 1 39.555 185.611 Q 25.563 182.348 15.836 173.54 A 49.871 49.871 0 0 1 13.5 171.281 A 47.721 47.721 0 0 1 0.03 138.462 A 62.364 62.364 0 0 1 0 136.531 Z"
                />
                <path
                  className="st3"
                  d="M 253.75 46.531 L 229.75 46.531 A 43.655 43.655 0 0 0 227.791 35.665 Q 222.385 19.281 203 19.281 Q 178 19.281 170 57.281 A 139.321 139.321 0 0 0 167.937 71.313 Q 166.982 80.996 166.982 92.385 A 280.091 280.091 0 0 0 167 95.531 A 291.261 291.261 0 0 1 171.002 90.408 Q 176.506 83.536 179.729 80.603 A 19.658 19.658 0 0 1 181 79.531 A 32.67 32.67 0 0 1 192.521 74.07 Q 197.167 72.844 202.65 72.595 A 62.831 62.831 0 0 1 205.5 72.531 A 70.8 70.8 0 0 1 222.237 74.382 A 43.612 43.612 0 0 1 249.75 93.531 Q 258.75 107.781 258.75 130.031 A 73.309 73.309 0 0 1 256.618 148.114 A 56.759 56.759 0 0 1 248 167.031 A 46.694 46.694 0 0 1 218.761 185.91 A 74.432 74.432 0 0 1 202.75 187.531 Q 164.5 187.531 152 164.531 A 53.392 53.392 0 0 1 147.651 153.13 Q 142.554 134.375 142.501 99.027 A 496.71 496.71 0 0 1 142.5 98.281 A 236.74 236.74 0 0 1 144.645 64.892 Q 153.938 0.031 203.5 0.031 Q 219.851 0.031 230.752 5.601 A 36.608 36.608 0 0 1 239.5 11.781 A 38.053 38.053 0 0 1 247.279 22.703 Q 251.969 32.281 253.75 46.531 Z M 233.056 135.795 A 82.522 82.522 0 0 0 233.25 130.031 Q 233.25 95.969 208.27 92.24 A 44.176 44.176 0 0 0 201.75 91.781 Q 172.302 91.781 170.167 124.685 A 82.61 82.61 0 0 0 170 130.031 Q 170 164.013 195.06 167.805 A 44.738 44.738 0 0 0 201.75 168.281 Q 230.78 168.281 233.056 135.795 Z"
                />
                <path
                  className="st3"
                  d="M 286.75 140.031 L 313 140.031 A 35.078 35.078 0 0 0 313.878 148.133 Q 315.691 155.774 321.25 160.406 A 28.403 28.403 0 0 0 332.627 166.058 Q 336.846 167.128 341.815 167.262 A 53.293 53.293 0 0 0 343.25 167.281 A 33.594 33.594 0 0 0 351.371 165.975 A 24.515 24.515 0 0 0 361.375 160.281 A 38.414 38.414 0 0 0 370.859 145.934 A 45.431 45.431 0 0 0 371.5 144.156 A 61.494 61.494 0 0 0 374.433 131.099 A 53.939 53.939 0 0 0 374.75 125.281 A 91.712 91.712 0 0 0 373.625 110.213 Q 369.146 83.474 346.845 82.564 A 39.089 39.089 0 0 0 345.25 82.531 Q 323.148 82.531 312.384 107.619 A 74.749 74.749 0 0 0 312 108.531 L 289.5 108.531 L 292.75 3.531 L 388.5 3.531 L 388.5 24.281 L 317.25 24.281 L 314.25 81.031 A 46.352 46.352 0 0 1 321.257 73.603 A 35.323 35.323 0 0 1 330.875 67.781 Q 340.25 64.031 350.75 64.031 A 58.206 58.206 0 0 1 363.235 65.857 A 40.342 40.342 0 0 1 378.75 73.656 Q 389.5 82.531 394.625 96.156 Q 399.75 109.781 400 124.781 A 71.047 71.047 0 0 1 395.512 146.461 A 79.577 79.577 0 0 1 395.25 147.156 Q 391 158.281 383.875 167.406 Q 376.75 176.531 367 181.906 Q 357.25 187.281 346 187.281 A 99.802 99.802 0 0 1 329.081 185.936 Q 313.082 183.18 302.5 174.781 A 40.675 40.675 0 0 1 286.996 145.442 A 58.041 58.041 0 0 1 286.75 140.031 Z"
                />
                <path
                  className="st3"
                  d="M 446 151.281 L 446 75.031 L 423.5 75.031 L 423.5 59.031 L 446 59.031 L 446 34.281 L 468.5 25.031 L 468.5 59.031 L 496 59.031 L 496 75.031 L 468.5 75.031 L 468.5 151.281 A 40.807 40.807 0 0 0 468.986 157.89 Q 470.91 169.548 480.446 170.012 A 16.535 16.535 0 0 0 481.25 170.031 Q 485.5 170.031 489.25 169.406 A 101.352 101.352 0 0 0 492.813 168.75 A 74.38 74.38 0 0 0 496 168.031 L 496 184.031 A 63.092 63.092 0 0 1 490.901 185.484 A 83.411 83.411 0 0 1 485.875 186.531 Q 480.25 187.531 473.75 187.531 A 41.545 41.545 0 0 1 465.88 186.835 Q 461.382 185.966 457.914 184.013 A 20.294 20.294 0 0 1 452.875 180.031 A 19.624 19.624 0 0 1 449.252 174.007 Q 446.889 168.114 446.243 158.787 A 108.909 108.909 0 0 1 446 151.281 Z"
                />
                <path
                  className="st3"
                  d="M 560.255 184.625 A 71.71 71.71 0 0 0 580.25 187.281 A 78.777 78.777 0 0 0 589.467 186.757 A 57.995 57.995 0 0 0 623.75 171.031 Q 635.563 159.383 639.623 141.705 A 90.077 90.077 0 0 0 641.75 121.531 A 111.763 111.763 0 0 0 641.707 118.413 Q 640.87 88.426 623.75 71.781 A 55.549 55.549 0 0 0 599.979 58.321 A 72.952 72.952 0 0 0 580.25 55.781 A 78.571 78.571 0 0 0 565.415 57.118 A 54.461 54.461 0 0 0 536.75 71.781 Q 524.656 83.539 520.688 101.955 A 92.945 92.945 0 0 0 518.75 121.531 A 110.338 110.338 0 0 0 518.759 122.966 Q 519.159 153.684 536.75 171.031 A 55.309 55.309 0 0 0 560.255 184.625 Z M 580.25 171.031 A 33.981 33.981 0 0 0 595.598 167.636 Q 602.339 164.281 607.424 157.614 A 44.694 44.694 0 0 0 609.25 155.031 A 56.022 56.022 0 0 0 617.327 133.459 A 74.31 74.31 0 0 0 618.25 121.531 A 73.717 73.717 0 0 0 616.648 105.769 A 53.309 53.309 0 0 0 609.25 87.781 Q 599.054 72.244 581.314 71.795 A 41.995 41.995 0 0 0 580.25 71.781 A 33.981 33.981 0 0 0 564.902 75.177 Q 558.161 78.531 553.076 85.199 A 44.694 44.694 0 0 0 551.25 87.781 Q 542.25 101.531 542.25 121.531 A 70.807 70.807 0 0 0 544.098 138.074 A 54.673 54.673 0 0 0 551.25 155.031 A 34.932 34.932 0 0 0 560.86 165.391 Q 567.924 170.304 577.394 170.938 A 42.793 42.793 0 0 0 580.25 171.031 Z"
                />
                <path
                  className="st3"
                  d="M 673.25 135.531 L 697.75 135.531 A 46.807 46.807 0 0 0 699.382 147.221 Q 703.701 162.306 719.31 164.963 A 42.883 42.883 0 0 0 726.5 165.531 A 26.897 26.897 0 0 0 738.275 162.989 A 26.838 26.838 0 0 0 746.5 156.781 A 31.354 31.354 0 0 0 753.56 143.774 Q 754.92 138.928 755.186 133.144 A 62.426 62.426 0 0 0 755.25 130.281 L 755.25 3.531 L 780.5 3.531 L 780.5 130.281 Q 780.5 147.281 773.5 160.156 Q 766.5 173.031 754.125 180.281 A 52.624 52.624 0 0 1 734.444 186.926 A 67.751 67.751 0 0 1 725.25 187.531 A 61.498 61.498 0 0 1 710.688 185.875 A 49.502 49.502 0 0 1 698 180.906 Q 686.25 174.281 679.75 162.531 A 51.998 51.998 0 0 1 673.709 143.386 A 65.592 65.592 0 0 1 673.25 135.531 Z"
                />
                <path
                  className="st3"
                  d="M 847.25 92.781 L 824 92.781 Q 824 55.781 874.25 55.781 A 115.274 115.274 0 0 1 890.231 56.798 Q 916.055 60.43 922.5 77.031 Q 924.716 83.075 925.146 105.028 A 589.823 589.823 0 0 1 925.25 116.531 L 925.25 138.281 Q 925.25 175.281 928.5 184.031 L 906 184.031 Q 905.5 181.281 904.75 176.656 Q 904 172.031 903.25 165.781 A 409.725 409.725 0 0 1 899.828 169.695 Q 898.461 171.238 897.191 172.635 A 235.189 235.189 0 0 1 894.75 175.281 A 49.649 49.649 0 0 1 892.022 177.987 Q 889.788 180.028 887.75 181.281 Q 878.5 187.281 865 187.281 A 59.806 59.806 0 0 1 843.797 183.588 A 55.647 55.647 0 0 1 833.25 178.281 A 38.243 38.243 0 0 1 824.161 170.574 A 29.357 29.357 0 0 1 817.25 151.031 A 45.331 45.331 0 0 1 819.938 135.012 Q 824.349 123.253 835.995 116.025 A 52.559 52.559 0 0 1 840 113.781 Q 854.069 106.747 874.602 105.368 A 155.261 155.261 0 0 1 885 105.031 Q 888 105.031 893.875 105.281 Q 899.285 105.512 901.833 105.53 A 58.403 58.403 0 0 0 902.25 105.531 A 34.003 34.003 0 0 0 903.209 98.839 A 39.179 39.179 0 0 0 903.25 97.031 A 30.495 30.495 0 0 0 901.66 86.747 Q 896.845 73.278 877.444 72.571 A 60.265 60.265 0 0 0 875.25 72.531 A 51.045 51.045 0 0 0 867.533 73.08 Q 863.44 73.707 860.064 75.05 A 26.103 26.103 0 0 0 856.5 76.781 Q 848.142 81.525 847.336 90.759 A 23.253 23.253 0 0 0 847.25 92.781 M 865.25 170.531 A 50.54 50.54 0 0 0 876.315 169.404 Q 883.229 167.851 888.191 164.159 A 26.82 26.82 0 0 0 895.25 156.281 A 36.867 36.867 0 0 0 899.023 147.565 Q 901.593 138.996 901.944 126.566 A 142.844 142.844 0 0 0 902 122.531 A 704.232 704.232 0 0 0 897.96 122.239 Q 892.894 121.889 890.333 121.807 A 42.593 42.593 0 0 0 889 121.781 Q 872.25 121.781 858.75 126.781 Q 840.5 133.531 840.5 148.031 Q 840.5 158.031 848 164.531 A 23.434 23.434 0 0 0 860.16 170.145 A 32.288 32.288 0 0 0 865.25 170.531 Z"
                />
                <path
                  className="st3"
                  d="M 987.25 233.531 L 964.75 233.531 L 964.75 59.031 L 987.25 59.031 L 987.25 74.781 Q 1007.75 55.781 1026.75 55.781 A 76.098 76.098 0 0 1 1044.118 57.637 Q 1061.531 61.719 1071.5 74.781 A 56.59 56.59 0 0 1 1080.818 93.351 Q 1084.5 105.565 1084.5 121.531 Q 1084.5 151.531 1071.5 168.281 Q 1056.75 187.531 1026.75 187.531 Q 1012.044 187.531 995.758 177.105 A 108.477 108.477 0 0 1 987.25 171.031 L 987.25 233.531 Z M 1023.75 171.281 A 35.498 35.498 0 0 0 1036.75 169.001 Q 1046.021 165.384 1052 156.031 Q 1060.5 143.031 1060.5 121.531 A 88.803 88.803 0 0 0 1059.496 107.755 Q 1058.327 100.325 1055.799 94.255 A 44.238 44.238 0 0 0 1052 87.031 A 33.328 33.328 0 0 0 1042.006 76.742 Q 1035.505 72.556 1026.978 71.903 A 42.207 42.207 0 0 0 1023.75 71.781 A 35.498 35.498 0 0 0 1010.75 74.062 Q 1001.479 77.679 995.5 87.031 Q 987 100.031 987 121.531 A 88.803 88.803 0 0 0 988.004 135.308 Q 989.173 142.738 991.701 148.808 A 44.238 44.238 0 0 0 995.5 156.031 A 33.328 33.328 0 0 0 1005.494 166.321 Q 1011.995 170.506 1020.522 171.16 A 42.207 42.207 0 0 0 1023.75 171.281"
                />
                <path
                  className="st3"
                  d="M 1142.5 92.781 L 1119.25 92.781 Q 1119.25 55.781 1169.5 55.781 A 115.274 115.274 0 0 1 1185.481 56.798 Q 1211.305 60.43 1217.75 77.031 Q 1219.966 83.075 1220.396 105.028 A 589.823 589.823 0 0 1 1220.5 116.531 L 1220.5 138.281 Q 1220.5 175.281 1223.75 184.031 L 1201.25 184.031 Q 1200.75 181.281 1200 176.656 Q 1199.25 172.031 1198.5 165.781 A 409.725 409.725 0 0 1 1195.078 169.695 Q 1193.711 171.238 1192.441 172.635 A 235.189 235.189 0 0 1 1190 175.281 A 49.649 49.649 0 0 1 1187.272 177.987 Q 1185.038 180.028 1183 181.281 Q 1173.75 187.281 1160.25 187.281 A 59.806 59.806 0 0 1 1139.047 183.588 A 55.647 55.647 0 0 1 1128.5 178.281 A 38.243 38.243 0 0 1 1119.411 170.574 A 29.357 29.357 0 0 1 1112.5 151.031 A 45.331 45.331 0 0 1 1115.188 135.012 Q 1119.599 123.253 1131.245 116.025 A 52.559 52.559 0 0 1 1135.25 113.781 Q 1149.319 106.747 1169.852 105.368 A 155.261 155.261 0 0 1 1180.25 105.031 Q 1183.25 105.031 1189.125 105.281 Q 1194.535 105.512 1197.083 105.53 A 58.403 58.403 0 0 0 1197.5 105.531 A 34.003 34.003 0 0 0 1198.459 98.839 A 39.179 39.179 0 0 0 1198.5 97.031 A 30.495 30.495 0 0 0 1196.91 86.747 Q 1192.095 73.278 1172.694 72.571 A 60.265 60.265 0 0 0 1170.5 72.531 A 51.045 51.045 0 0 0 1162.783 73.08 Q 1158.69 73.707 1155.314 75.05 A 26.103 26.103 0 0 0 1151.75 76.781 Q 1143.392 81.525 1142.586 90.759 A 23.253 23.253 0 0 0 1142.5 92.781 Z M 1160.5 170.531 A 50.54 50.54 0 0 0 1171.565 169.404 Q 1178.479 167.851 1183.441 164.159 A 26.82 26.82 0 0 0 1190.5 156.281 A 36.867 36.867 0 0 0 1194.273 147.565 Q 1196.843 138.996 1197.194 126.566 A 142.844 142.844 0 0 0 1197.25 122.531 A 704.232 704.232 0 0 0 1193.21 122.239 Q 1188.144 121.889 1185.583 121.807 A 42.593 42.593 0 0 0 1184.25 121.781 Q 1167.5 121.781 1154 126.781 Q 1135.75 133.531 1135.75 148.031 Q 1135.75 158.031 1143.25 164.531 A 23.434 23.434 0 0 0 1155.41 170.145 A 32.288 32.288 0 0 0 1160.5 170.531 Z"
                />
                <path
                  className="st3"
                  d="M 1282.5 184.031 L 1260 184.031 L 1260 59.031 L 1282.5 59.031 L 1282.5 75.031 Q 1285.25 72.281 1288 69.406 Q 1290.75 66.531 1293.25 63.781 A 34.195 34.195 0 0 1 1305.488 57.659 Q 1312.143 55.781 1320.5 55.781 A 72.344 72.344 0 0 1 1339.203 57.983 Q 1368.5 65.844 1368.5 101.781 L 1368.5 184.031 L 1346.25 184.031 L 1346.25 101.281 A 29.139 29.139 0 0 0 1343.759 89.218 A 28.375 28.375 0 0 0 1342 85.906 Q 1337.75 79.031 1330.875 74.906 A 29.179 29.179 0 0 0 1316.096 70.787 A 34.682 34.682 0 0 0 1315.5 70.781 Q 1306.5 70.781 1299 74.906 Q 1291.5 79.031 1287 86.406 A 30.895 30.895 0 0 0 1282.621 100.221 A 38.045 38.045 0 0 0 1282.5 103.281 L 1282.5 184.031 Z"
                />
              </svg>

              <h1 className="text px-4">365 to Japan</h1>
            </div>
            <div
              className="col-lg-12 mb-5"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <h1 className="mx-auto catch-phrase px-3">
                A Japanese Language & Culture Blog
              </h1>
            </div>

            <div
              className=" mb-5"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Carousel
                className="my-auto content1"
                show={4.5}
                slide={1}
                swiping={true}
                leftArrow={
                  <LeftCircleOutlined
                    className="mx-3"
                    style={{ fontSize: "20px", color: "#FF904D" }}
                    width={500}
                  ></LeftCircleOutlined>
                }
                rightArrow={
                  <RightCircleOutlined
                    className="mx-3"
                    style={{ fontSize: "20px", color: "#FF904D" }}
                    width={500}
                  ></RightCircleOutlined>
                }
                transition={0.5}
              >
                <div className="cover-img-wrapper">
                  <img
                    className="cover-img"
                    src={image1}
                  ></img>
                </div>
                <div className="cover-img-wrapper">
                  <img
                    className="cover-img"
                    src={image2}
                  ></img>
                </div>
                <div className="cover-img-wrapper">
                  <img
                    className="cover-img"
                    src={image3}
                  ></img>
                </div>
                <div className="cover-img-wrapper">
                  <img
                    className="cover-img"
                    src={image4}
                  ></img>
                </div>
                <div className="cover-img-wrapper">
                  <img
                    className="cover-img"
                    src={image5}
                  ></img>
                </div>
                <div className="cover-img-wrapper">
                  <img
                    className="cover-img"
                    src={image6}
                  ></img>
                </div>
                <div className="cover-img-wrapper">
                  <img
                    className="cover-img"
                    src={image7}
                  ></img>
                </div>
                <div className="cover-img-wrapper">
                  <img
                    className="cover-img"
                    src={image8}
                  ></img>
                </div>
                <div className="cover-img-wrapper">
                  <img
                    className="cover-img"
                    src={image9}
                  ></img>
                </div>
                <div className="cover-img-wrapper">
                  <img
                    className="cover-img"
                    src={image10}
                  ></img>
                </div>
                <div className="cover-img-wrapper">
                  <img
                    className="cover-img"
                    src={image11}
                  ></img>
                </div>
                <div className="cover-img-wrapper">
                  <img
                    className="cover-img"
                    src={image12}
                  ></img>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <Modal
        open={showModal}
        onCancel={hideEventModal}
        centered
        style={{ marginTop: "40px" }}
        footer={null}
        title="365toJapan Rated as Top 60 for 2023!"
      >
        <h6 style={{ fontFamily: "'Open Sans', -apple-system", color: "grey" }}>
          365toJapan has been rated as one of the top 60 blogs to watch in 2023
          by Feedspot. Learn more{" "}
          <a href="https://blog.feedspot.com/japan_blogs/">here.</a>
        </h6>
        <br></br>
        <img src={award} className="center" />
      </Modal>
    </>
  );
}

export default HomeBanner;