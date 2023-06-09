import { useRef, useEffect, React } from 'react'
import { motion, useDragControls } from "framer-motion"
import pic1 from '../pictures/pic1.jpg'
import pic2 from '../pictures/pic2.jpg'
import pic3 from '../pictures/pic3.jpg'
import pic4 from '../pictures/pic4.jpg'
import pic5 from '../pictures/pic5.jpg'
import './slider.css'

const caruselARR = [
  { id: 0, text: "garden shop", src: pic1, link:"https://github.com/DIIdeveloper/garden-shop"},
  { id: 1, text: "card", src: pic2, link:"https://github.com/DIIdeveloper/garden-shop" },
  { id: 2, text: "First page", src: pic3, link:"https://github.com/DIIdeveloper/My-first-page" },
  { id: 3, text: "Behavioral analysis", src: pic4, link:"https://github.com/DIIdeveloper/Behavioral-analysis-system-for-malware" },
  { id: 4, text: "system for malware", src: pic5, link:"https://github.com/DIIdeveloper/Behavioral-analysis-system-for-malware" }];

function Slider() {

  const imageRef = useRef()
  const scrollRef = useRef()
  const carusel = useRef()
  useEffect(() => {
    const onWheel = (e) => {
      if (e.deltaY < 0) { scrollRef.current.scrollLeft -= 400; }
      else {
        scrollRef.current.scrollLeft += 400;
      }
    };
    scrollRef.current.addEventListener('wheel', onWheel, {
      passive: true,
      smooth: true,
    });
    return () => {
      scrollRef.current.removeEventListener('wheel', onWheel, { passive: true });
    };
  }, []);

  function offScroll() {
    document.body.style.overflow = "hidden";
  }

  function onScroll() {
    document.body.style.overflow = "visible";
  }


  const dragControls = useDragControls();

  return (
    <>
      <div className='carusel-viewport' ref={carusel} onMouseEnter={offScroll} onMouseLeave={onScroll}>
        <div className='viewport' ref={imageRef}>
          <div className='carusel-main'
            ref={scrollRef}
            onPointerDown={(event) => dragControls.start(event)}>

            <motion.div className='wrapper'
              drag
              dragConstraints={imageRef}
              dragControls={dragControls}
              
            >
              
              <div className='motion-div'>
                <div className='motion-img'></div>
                <div className='motion-p'></div>
              </div>
              {caruselARR.map((obj) => <motion.div className='motion-div'
                key={obj.id}
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 1 }}
                viewport={{ root: scrollRef }}
              >
                <a href={obj.link}>
                <motion.img className='motion-img' src={obj.src}
                  key={obj.src}
                  initial={{ scale: 1 }}
                  whileInView={{ scale: [null, 1.1, 1.2], boxShadow: "1px 23px 41px 4px rgba(0, 0, 0, 0.5)" }}
                  transition={{ duration: 0.2 }}
                  viewport={{ root: imageRef }}>
                </motion.img>
                </a>

                <motion.p className='motion-p'
                  key={obj.text}
                  initial={{ scale: 1 }} 
                  whileInView={{ scale: [null, 1.1, 1.2], marginTop:"30px" ,marginBottom: "5px" }}
                  transition={{ duration: 0.2 }}
                  
                  viewport={{ root: imageRef }}>{obj.text}</motion.p>
              </motion.div>
              )}
              <div className='motion-div'>
                <div className='motion-img'></div>
                <div className='motion-p'></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Slider
