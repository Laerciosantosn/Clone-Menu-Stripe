import React, { useRef, useState, useContext, useEffect} from 'react';
import { motion } from 'framer-motion';

import { Context } from './Provider';
import { useDimensions } from './dimensions';

let lastOptionId = 0;

export function DropdownOption({name, content: Content, backgroundHeight}) {
  const idRef = useRef(++lastOptionId);
  const id = idRef.current;

  const [optionHook, optionDimensions] = useDimensions();
  const [registered, setRegistered] = useState(false);

  const {
    registerOption,
    updateOptionProps,
    deleteOptionByid,
    setTargetId,
    targetId,
  } = useContext(Context);

  useEffect(() => {
    if (!registered && optionDimensions) {
      const WrapperContent = () => {
        const contentRef = useRef();

        useEffect(() => {
         const contentDimensioins = contentRef.current.getBoundingClientRect();
         updateOptionProps(id, { contentDimensioins })
        }, [])

        return (
          <div ref={contentRef}>
            <Content />
          </div>
        )
      }

      registerOption({
        id,
        optionDimensions,
        optionCenterX: optionDimensions.x + optionDimensions.width / 2,
        WrapperContent,
        backgroundHeight,
      })
      setRegistered(true)
    } else if (registered && optionDimensions) {
      updateOptionProps(id, {
        optionDimensions,
        optionCenterX: optionDimensions.x + optionDimensions.width / 2,
      })
    }
  }, [
      registerOption, 
      id, 
      registered, 
      optionDimensions,
      updateOptionProps, 
      deleteOptionByid, 
      backgroundHeight, 
  ]);

  const handleOpen = () => setTargetId(id);
  const handleClose = () => setTargetId(null);
  const handleTouch = () => (window.isMobile = true);

  const handleClick = (e) => {
    e.preventDefault();

    return targetId === id ? handleClose() : handleOpen();
  };

  return (
    <motion.button 
      className="dorpdown-option"
      ref={optionHook}
      onMouseDown={handleClick}
      onHoverStart={() => !window.isMoblie && handleOpen()}
      onHoverEnd={() => !window.isMoblie && handleClose()}
      onTouchStart={handleTouch}
      onFocus={handleOpen}
      onBlur={handleClose}
    >
      {name}
    </motion.button>

  )
}