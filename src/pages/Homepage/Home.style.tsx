import styled from "styled-components";

export const HomePageWrapper = styled.div`
         width: 100%;
         overflow-x: hidden !important;
         .section1 {
           background: var(--lightGreen) 0% 0% no-repeat padding-box;
           padding-bottom: 5rem;
           /* box-shadow: 2px 4px 4px lightgrey; */
           opacity: 1;
           /* background-size: 100%; */
           width: 100%;
           .img-container {
             display: flex;
             justify-content: center;
             align-items: center;
             /* margin-bottom: 0; */
             
           }
           .margin-negative {
             margin-top: 0rem;
           }
         }
         .section2 {
           /* background: #fff 0% 0% no-repeat padding-box; */
           padding: 5rem 12rem 12rem 12rem;
           box-shadow: 32px 32px 48px #050e3514;
           opacity: 1;
           background-size: 100%;
         }
         .section3 {
           background: var(--lightGreen) 0% 0% no-repeat;
           padding: 10rem 35rem 1rem 35rem;
           /* box-shadow: 2px 4px 2px lightgrey; */
           opacity: 1;
           width: 100%;
           /* background-size: 100%; */
         }
         .section4 {
           padding: 10rem 18rem;
           box-shadow: 32px 32px 48px #050e3514;
           opacity: 1;
           width: 100%;
           /* background-size: 100%; */
         }
         .overall-section {
           background: #f6f9fd;
           width: 100%;
         }
         .section5 {
           background: transparent
             radial-gradient(
               closest-side at 50% 0%,
               #0a1f62 0%,
               #061648 100%,
               #061648 100%
             )
             0% 0% no-repeat padding-box;
           opacity: 1;
           clip-path: polygon(
             100% 0,
             100% 75%,
             68% 75%,
             47% 95%,
             19% 100%,
             0 100%,
             0% 35%,
             0 0
           );

           height: 160.4rem;
           padding: 10rem 20rem;
           .ring {
             border: 1.5px solid #30d1ff;
             border-radius: 50%;
             width: 6rem;
             height: 6rem;
             padding: 2rem 2.7rem;
             color: white;
             position: relative;
             text-align: center;
             span {
               position: absolute;
               top: 50%;
               left: 50%;
               transform: translate(-50%, -50%);
               font-size: 12px;
               width: 100%;
               color: white;
             }
           }
           .big-rectangle {
             background: #f0f5fc 0% 0% no-repeat padding-box;
             border-radius: 10px;
             max-width: 86.2rem;
             opacity: 1;
             padding: 3rem;
             .btn-blue {
               background: #1e40c8 0% 0% no-repeat padding-box;
               box-shadow: 0px 16px 48px #050e353d;
               border-radius: 9px;
               font-size: 14px;
               padding: 1.6rem;
               color: white;
               opacity: 1;
             }
             img {
               width: 5rem;
             }
           }
           .section5-last {
             max-width: 59.5rem;
             max-height: 20.2rem;
             background: #f4f4f4 0% 0% no-repeat padding-box;
             box-shadow: 0px 3px 6px #00000029;
             border-radius: 30px;
             opacity: 1;
             padding: 2rem;
             img {
               width: 5rem;
             }
           }
         }
         .section6 {
           padding: 10rem 17rem;
           width: 100%;
         }
        }

        @media (max-width: 1200px) {
          .section2,.section3,.section4,.section5,.section6 {
               padding: 10rem;
             }
          .section5{
/* clip-path: polygon(50% 0%, 100% 1%, 100% 35%, 100% 71%, 85% 100%, 50% 100%, 0 100%, 0% 70%, 0% 35%, 0 0); */
clip-path: polygon(50% 0%, 100% 0, 100% 35%, 100% 68%, 76% 91%, 40% 100%, 0 100%, 0% 70%, 0% 35%, 0 0);

}
        }
           @media (max-width: 900px) {
             .section2,.section3,.section4,.section5,.section6 {
               padding: 5rem;
             }
             .section3 {
               padding: 10rem 10rem 1rem 10rem;
             }
             
             .section5{
              clip-path: polygon(50% 0%, 100% 0, 100% 35%, 100% 68%, 100% 100%, 40% 100%, 0 100%, 0% 70%, 0% 35%, 0 0);
                .big-rectangle {
                .btn-blue {
                
               font-size: 10px;
               padding: 1rem;
               color: white;
               opacity: 1;
             }
             img {
               width: 10rem;
             }
           }
             }
             
             
             @media (max-width: 420px) {
             .section2,.section3,.section4,.section5,.section6 {
               padding: 5rem;
             }
            }
       `;
