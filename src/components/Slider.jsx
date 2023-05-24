import { useRef, useEffect, React } from 'react'
import { motion, useDragControls } from "framer-motion"
import pic1 from '../pictures/pic1.jpg'
import pic2 from '../pictures/pic2.jpg'
import pic3 from '../pictures/pic3.jpg'
import pic4 from '../pictures/pic4.jpg'
import pic5 from '../pictures/pic5.jpg'
import './slider.css'

const caruselARR = [
  { id: 0, text: "play", src: pic1 },
  { id: 1, text: "game", src: pic2 },
  { id: 2, text: "roles", src: pic3 },
  { id: 3, text: "rules", src: pic4 },
  { id: 4, text: "pictures", src: pic5 },
  { id: 5, text: "SDF", src: pic5 },
  { id: 6, text: "pictuSDFSDres", src: pic5 },
  { id: 7, text: "FSDF", src: pic1 }];

function Slider() {

  const imageRef = useRef()
  const scrollRef = useRef()
  const carusel = useRef()
  useEffect(() => {
    const onWheel = (e) => {
      if (e.deltaY < 0) { scrollRef.current.scrollLeft -= 200; }
      else {
        scrollRef.current.scrollLeft += 200;
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

              {caruselARR.map((obj) => <motion.div className='motion-div'
                key={obj.id}
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 1 }}
                viewport={{ root: scrollRef }}
              >
                <motion.img className='motion-img' src={obj.src}
                  key={obj.src}
                  initial={{ scale: 1 }}
                  whileInView={{ scale: [null, 1.1, 1.2], boxShadow: "1px 23px 41px 4px rgba(0, 0, 0, 0.5)" }}
                  transition={{ duration: 0.2 }}
                  viewport={{ root: imageRef }}>
                    
                </motion.img>

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
