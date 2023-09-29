import { ButtonLink } from "../../components/ButtonLink";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <div>
        <div>
          <svg
            width="123"
            height="20"
            viewBox="0 0 123 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.092 0.858C14.7507 0.858 15.288 1.07467 15.704 1.508C16.1373 1.94133 16.354 2.50467 16.354 3.198V17.108C16.354 17.8187 16.146 18.3907 15.73 18.824C15.314 19.2573 14.7767 19.474 14.118 19.474C13.338 19.474 12.7487 19.214 12.35 18.694L4.446 8.84V17.108C4.446 17.8187 4.24667 18.3907 3.848 18.824C3.44933 19.2573 2.912 19.474 2.236 19.474C1.57733 19.474 1.04 19.2573 0.624 18.824C0.208 18.3907 0 17.8187 0 17.108V3.198C0 2.50467 0.208 1.94133 0.624 1.508C1.04 1.07467 1.57733 0.858 2.236 0.858C2.98133 0.858 3.562 1.118 3.978 1.638L11.882 11.466V3.198C11.882 2.48733 12.0813 1.924 12.48 1.508C12.896 1.07467 13.4333 0.858 14.092 0.858Z"
              fill="url(#paint0_linear_118_261)"
            />
            <path
              d="M29.9477 6.266C30.6584 6.266 31.2217 6.45667 31.6377 6.838C32.0537 7.21933 32.2617 7.73933 32.2617 8.398V17.394C32.2617 18.0007 32.0451 18.5033 31.6117 18.902C31.1784 19.2833 30.6151 19.474 29.9217 19.474C29.2977 19.474 28.7864 19.3093 28.3877 18.98C27.9891 18.6333 27.7811 18.174 27.7637 17.602C27.3651 18.226 26.8537 18.7027 26.2297 19.032C25.6231 19.3613 24.9211 19.526 24.1237 19.526C22.4771 19.526 21.2551 19.0753 20.4577 18.174C19.6604 17.2553 19.2617 15.8687 19.2617 14.014V8.398C19.2617 7.73933 19.4697 7.21933 19.8857 6.838C20.3017 6.45667 20.8651 6.266 21.5757 6.266C22.2864 6.266 22.8497 6.45667 23.2657 6.838C23.6817 7.21933 23.8897 7.73933 23.8897 8.398V14.118C23.8897 15.366 24.4271 15.99 25.5017 15.99C26.1257 15.99 26.6371 15.7647 27.0357 15.314C27.4344 14.8633 27.6337 14.274 27.6337 13.546V8.398C27.6337 7.73933 27.8417 7.21933 28.2577 6.838C28.6737 6.45667 29.2371 6.266 29.9477 6.266Z"
              fill="url(#paint1_linear_118_261)"
            />
            <path
              d="M58.177 15.73C58.6277 16.1633 58.853 16.666 58.853 17.238C58.853 17.81 58.6364 18.3127 58.203 18.746C57.7697 19.1793 57.2584 19.396 56.669 19.396C56.0277 19.396 55.4384 19.1187 54.901 18.564L47.491 10.972V17.108C47.491 17.836 47.2744 18.4167 46.841 18.85C46.4077 19.266 45.8184 19.474 45.073 19.474C44.345 19.474 43.7644 19.266 43.331 18.85C42.915 18.4167 42.707 17.836 42.707 17.108V3.198C42.707 2.48733 42.915 1.924 43.331 1.508C43.7644 1.07467 44.345 0.858 45.073 0.858C45.8184 0.858 46.4077 1.07467 46.841 1.508C47.2744 1.924 47.491 2.48733 47.491 3.198V8.918L54.797 1.56C55.2477 1.092 55.759 0.858 56.331 0.858C56.903 0.858 57.4057 1.07467 57.839 1.508C58.2724 1.924 58.489 2.418 58.489 2.99C58.489 3.562 58.2377 4.09067 57.735 4.576L52.405 9.802L58.177 15.73Z"
              fill="url(#paint2_linear_118_261)"
            />
            <path
              d="M70.8224 15.21C71.221 15.21 71.5417 15.366 71.7844 15.678C72.0444 15.99 72.1744 16.3973 72.1744 16.9C72.1744 17.5933 71.8364 18.122 71.1604 18.486C70.571 18.7807 69.869 19.032 69.0544 19.24C68.257 19.4307 67.5204 19.526 66.8444 19.526C65.423 19.526 64.1837 19.2573 63.1264 18.72C62.069 18.1827 61.2544 17.4113 60.6824 16.406C60.1104 15.4007 59.8244 14.222 59.8244 12.87C59.8244 11.5873 60.093 10.4433 60.6304 9.438C61.185 8.41533 61.9477 7.62667 62.9184 7.072C63.9064 6.5 65.0157 6.214 66.2464 6.214C67.4424 6.214 68.491 6.474 69.3924 6.994C70.2937 7.514 70.987 8.25067 71.4724 9.204C71.975 10.1573 72.2264 11.2753 72.2264 12.558C72.2264 12.9567 72.131 13.2687 71.9404 13.494C71.767 13.702 71.507 13.806 71.1604 13.806H64.2964C64.4177 14.638 64.6864 15.236 65.1024 15.6C65.5184 15.964 66.1337 16.146 66.9484 16.146C67.3817 16.146 67.7804 16.1027 68.1444 16.016C68.5084 15.912 68.9157 15.7733 69.3664 15.6C69.6264 15.496 69.8777 15.4093 70.1204 15.34C70.3804 15.2533 70.6144 15.21 70.8224 15.21ZM66.3764 9.334C65.7697 9.334 65.2844 9.53333 64.9204 9.932C64.5564 10.3133 64.3397 10.8767 64.2704 11.622H68.3524C68.2484 10.0967 67.5897 9.334 66.3764 9.334Z"
              fill="url(#paint3_linear_118_261)"
            />
            <path
              d="M82.9424 6.214C84.4678 6.214 85.6031 6.67333 86.3484 7.592C87.0938 8.49333 87.4664 9.87133 87.4664 11.726V17.342C87.4664 18.0007 87.2584 18.5207 86.8424 18.902C86.4264 19.2833 85.8631 19.474 85.1524 19.474C84.4418 19.474 83.8784 19.2833 83.4624 18.902C83.0464 18.5207 82.8384 18.0007 82.8384 17.342V11.934C82.8384 11.1713 82.6998 10.6167 82.4224 10.27C82.1624 9.92333 81.7638 9.75 81.2264 9.75C80.5331 9.75 79.9784 9.97533 79.5624 10.426C79.1638 10.8593 78.9644 11.4487 78.9644 12.194V17.342C78.9644 18.0007 78.7564 18.5207 78.3404 18.902C77.9244 19.2833 77.3611 19.474 76.6504 19.474C75.9398 19.474 75.3764 19.2833 74.9604 18.902C74.5444 18.5207 74.3364 18.0007 74.3364 17.342V8.346C74.3364 7.73933 74.5531 7.24533 74.9864 6.864C75.4198 6.46533 75.9831 6.266 76.6764 6.266C77.3351 6.266 77.8551 6.448 78.2364 6.812C78.6351 7.176 78.8344 7.65267 78.8344 8.242C79.2851 7.58333 79.8658 7.08067 80.5764 6.734C81.2871 6.38733 82.0758 6.214 82.9424 6.214Z"
              fill="url(#paint4_linear_118_261)"
            />
            <path
              d="M99.7766 15.912C101.163 15.912 101.857 16.4753 101.857 17.602C101.857 18.746 101.163 19.318 99.7766 19.318H91.5866C90.98 19.318 90.486 19.1273 90.1046 18.746C89.7233 18.3647 89.5326 17.9053 89.5326 17.368C89.5326 16.796 89.7493 16.2673 90.1826 15.782L95.6426 9.932H91.4566C90.07 9.932 89.3766 9.36 89.3766 8.216C89.3766 7.08933 90.07 6.526 91.4566 6.526H99.3346C99.9413 6.526 100.435 6.71667 100.817 7.098C101.198 7.47933 101.389 7.93867 101.389 8.476C101.389 9.03067 101.172 9.55067 100.739 10.036L95.2526 15.912H99.7766Z"
              fill="url(#paint5_linear_118_261)"
            />
            <path
              d="M105.875 19.474C105.216 19.474 104.662 19.3007 104.211 18.954C103.778 18.59 103.561 18.0527 103.561 17.342V8.398C103.561 7.68733 103.778 7.15867 104.211 6.812C104.662 6.448 105.216 6.266 105.875 6.266C106.534 6.266 107.08 6.448 107.513 6.812C107.964 7.15867 108.189 7.68733 108.189 8.398V17.342C108.189 18.0527 107.964 18.59 107.513 18.954C107.08 19.3007 106.534 19.474 105.875 19.474ZM105.875 4.446C105.095 4.446 104.471 4.24667 104.003 3.848C103.552 3.432 103.327 2.886 103.327 2.21C103.327 1.534 103.552 0.996667 104.003 0.598C104.471 0.199333 105.095 0 105.875 0C106.638 0 107.253 0.199333 107.721 0.598C108.189 0.996667 108.423 1.534 108.423 2.21C108.423 2.886 108.189 3.432 107.721 3.848C107.27 4.24667 106.655 4.446 105.875 4.446Z"
              fill="url(#paint6_linear_118_261)"
            />
            <path
              d="M121.274 15.21C121.672 15.21 121.993 15.366 122.236 15.678C122.496 15.99 122.626 16.3973 122.626 16.9C122.626 17.5933 122.288 18.122 121.612 18.486C121.022 18.7807 120.32 19.032 119.506 19.24C118.708 19.4307 117.972 19.526 117.296 19.526C115.874 19.526 114.635 19.2573 113.578 18.72C112.52 18.1827 111.706 17.4113 111.134 16.406C110.562 15.4007 110.276 14.222 110.276 12.87C110.276 11.5873 110.544 10.4433 111.082 9.438C111.636 8.41533 112.399 7.62667 113.37 7.072C114.358 6.5 115.467 6.214 116.698 6.214C117.894 6.214 118.942 6.474 119.844 6.994C120.745 7.514 121.438 8.25067 121.924 9.204C122.426 10.1573 122.678 11.2753 122.678 12.558C122.678 12.9567 122.582 13.2687 122.392 13.494C122.218 13.702 121.958 13.806 121.612 13.806H114.748C114.869 14.638 115.138 15.236 115.554 15.6C115.97 15.964 116.585 16.146 117.4 16.146C117.833 16.146 118.232 16.1027 118.596 16.016C118.96 15.912 119.367 15.7733 119.818 15.6C120.078 15.496 120.329 15.4093 120.572 15.34C120.832 15.2533 121.066 15.21 121.274 15.21ZM116.828 9.334C116.221 9.334 115.736 9.53333 115.372 9.932C115.008 10.3133 114.791 10.8767 114.722 11.622H118.804C118.7 10.0967 118.041 9.334 116.828 9.334Z"
              fill="url(#paint7_linear_118_261)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_118_261"
                x1="35.3857"
                y1="19.318"
                x2="35.8857"
                y2="19.318"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FD377E" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_118_261"
                x1="35.3857"
                y1="19.318"
                x2="35.8857"
                y2="19.318"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FD377E" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_118_261"
                x1="35.3857"
                y1="19.318"
                x2="35.8857"
                y2="19.318"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FD377E" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_118_261"
                x1="35.3857"
                y1="19.318"
                x2="35.8857"
                y2="19.318"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FD377E" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_118_261"
                x1="35.3857"
                y1="19.318"
                x2="35.8857"
                y2="19.318"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FD377E" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_118_261"
                x1="35.3857"
                y1="19.318"
                x2="35.8857"
                y2="19.318"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FD377E" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_118_261"
                x1="35.3857"
                y1="19.318"
                x2="35.8857"
                y2="19.318"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FD377E" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_118_261"
                x1="35.3857"
                y1="19.318"
                x2="35.8857"
                y2="19.318"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FD377E" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
            </defs>
          </svg>

          <h1>Centralize o controle de suas finanças</h1>

          <p>com rapidez e segurança</p>

          <ButtonLink href="/dashboard" size="medium" color="pink">
            Começar
          </ButtonLink>
        </div>

        <svg
          width="593"
          height="593"
          viewBox="0 0 593 593"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M593 296.5C593 460.252 460.252 593 296.5 593C132.748 593 0 460.252 0 296.5C0 132.748 132.748 0 296.5 0C460.252 0 593 132.748 593 296.5Z"
            fill="#E064CC"
            fill-opacity="0.05"
          />
          <path
            d="M554.976 296.5C554.976 439.252 439.252 554.976 296.5 554.976C153.748 554.976 38.0244 439.252 38.0244 296.5C38.0244 153.748 153.748 38.0244 296.5 38.0244C439.252 38.0244 554.976 153.748 554.976 296.5Z"
            fill="#E064CC"
            fill-opacity="0.05"
          />
          <path
            d="M506.087 296.5C506.087 413.752 411.036 508.803 293.784 508.803C176.532 508.803 81.4809 413.752 81.4809 296.5C81.4809 179.248 176.532 84.1969 293.784 84.1969C411.036 84.1969 506.087 179.248 506.087 296.5Z"
            fill="#E064CC"
            fill-opacity="0.05"
          />
          <path
            d="M174.731 107.736C174.731 105.736 176.353 104.115 178.353 104.115H427.322C429.322 104.115 430.944 105.736 430.944 107.736V455.388C430.944 457.388 429.322 459.009 427.322 459.009H178.353C176.353 459.009 174.731 457.388 174.731 455.388V107.736Z"
            fill="white"
          />
          <path
            d="M200 195.811C200 194.811 200.811 194 201.811 194H404.189C405.189 194 406 194.811 406 195.811V228.189C406 229.189 405.189 230 404.189 230H201.811C200.811 230 200 229.189 200 228.189V195.811Z"
            fill="#F3F3F3"
          />
          <path
            d="M200 246.811C200 245.811 200.811 245 201.811 245H404.189C405.189 245 406 245.811 406 246.811V279.189C406 280.189 405.189 281 404.189 281H201.811C200.811 281 200 280.189 200 279.189V246.811Z"
            fill="#F3F3F3"
          />
          <path
            d="M200 144.811C200 143.811 200.811 143 201.811 143H404.189C405.189 143 406 143.811 406 144.811V177.189C406 178.189 405.189 179 404.189 179H201.811C200.811 179 200 178.189 200 177.189V144.811Z"
            fill="#F3F3F3"
          />
          <path
            d="M200 348.811C200 347.811 200.811 347 201.811 347H404.189C405.189 347 406 347.811 406 348.811V381.189C406 382.189 405.189 383 404.189 383H201.811C200.811 383 200 382.189 200 381.189V348.811Z"
            fill="#F3F3F3"
          />
          <path
            d="M200 399.811C200 398.811 200.811 398 201.811 398H404.189C405.189 398 406 398.811 406 399.811V432.189C406 433.189 405.189 434 404.189 434H201.811C200.811 434 200 433.189 200 432.189V399.811Z"
            fill="#F3F3F3"
          />
          <path
            d="M200 297.811C200 296.811 200.811 296 201.811 296H404.189C405.189 296 406 296.811 406 297.811V330.189C406 331.189 405.189 332 404.189 332H201.811C200.811 332 200 331.189 200 330.189V297.811Z"
            fill="#F3F3F3"
          />
          <path
            d="M197 242.16C197 241.16 197.811 240.35 198.811 240.35H247.699C248.699 240.35 249.51 241.16 249.51 242.16V253.93C249.51 254.93 248.699 255.74 247.699 255.74H198.811C197.811 255.74 197 254.93 197 253.93V242.16Z"
            fill="#FCEFFA"
          />
          <path
            d="M220 309.68C220 308.2 221.2 307 222.68 307H449.107C450.587 307 451.786 308.2 451.786 309.68V373.32C451.786 374.8 450.587 376 449.107 376H222.68C221.2 376 220 374.8 220 373.32V309.68Z"
            fill="white"
          />
          <path
            d="M230.049 323.078C230.049 321.598 231.248 320.398 232.728 320.398H272.252C273.732 320.398 274.932 321.598 274.932 323.078V360.592C274.932 362.072 273.732 363.272 272.252 363.272H232.728C231.248 363.272 230.049 362.072 230.049 360.592V323.078Z"
            fill="#66C085"
          />
          <path
            d="M283.641 321.738C283.641 320.998 284.241 320.398 284.981 320.398H435.039C435.779 320.398 436.379 320.998 436.379 321.738V330.447C436.379 331.187 435.779 331.786 435.039 331.786H284.981C284.241 331.786 283.641 331.187 283.641 330.447V321.738Z"
            fill="#66C085"
            fill-opacity="0.11"
          />
          <path
            d="M283.641 340.495C283.641 339.755 284.241 339.155 284.981 339.155H321.155C321.895 339.155 322.495 339.755 322.495 340.495V349.204C322.495 349.944 321.895 350.544 321.155 350.544H284.981C284.241 350.544 283.641 349.944 283.641 349.204V340.495Z"
            fill="#66C085"
            fill-opacity="0.11"
          />
          <path
            d="M81.4809 241.727C81.4809 239.727 83.1022 238.105 85.1023 238.105H391.108C393.108 238.105 394.73 239.727 394.73 241.727V327.734C394.73 329.734 393.108 331.356 391.108 331.356H85.1023C83.1022 331.356 81.4809 329.734 81.4809 327.734V241.727Z"
            fill="white"
          />
          <path
            d="M95.061 259.834C95.061 257.834 96.6824 256.212 98.6824 256.212H152.098C154.098 256.212 155.719 257.834 155.719 259.834V310.533C155.719 312.533 154.098 314.154 152.098 314.154H98.6824C96.6824 314.154 95.061 312.533 95.061 310.533V259.834Z"
            fill="#FD377E"
          />
          <path
            d="M167.489 258.023C167.489 257.023 168.299 256.212 169.299 256.212H372.096C373.096 256.212 373.907 257.023 373.907 258.023V269.792C373.907 270.792 373.096 271.603 372.096 271.603H169.299C168.299 271.603 167.489 270.792 167.489 269.792V258.023Z"
            fill="#FCEFFA"
          />
          <path
            d="M167.489 283.372C167.489 282.372 168.299 281.562 169.299 281.562H218.188C219.188 281.562 219.998 282.372 219.998 283.372V295.142C219.998 296.142 219.188 296.953 218.188 296.953H169.299C168.299 296.953 167.489 296.142 167.489 295.142V283.372Z"
            fill="#FCEFFA"
          />
          <path
            d="M388 119C388 120.657 386.657 122 385 122C383.343 122 382 120.657 382 119C382 117.343 383.343 116 385 116C386.657 116 388 117.343 388 119Z"
            fill="#FD377E"
          />
          <path
            d="M403 119C403 120.657 401.657 122 400 122C398.343 122 397 120.657 397 119C397 117.343 398.343 116 400 116C401.657 116 403 117.343 403 119Z"
            fill="#66C085"
          />
          <path
            d="M418 119C418 120.657 416.657 122 415 122C413.343 122 412 120.657 412 119C412 117.343 413.343 116 415 116C416.657 116 418 117.343 418 119Z"
            fill="black"
          />
        </svg>
      </div>
    </Container>
  );
};

export { Home };
