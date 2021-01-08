import { useEffect, useState, useCallback } from 'react';
export const useSelectLogic = (onChange, {
  headerRef,
  popoverRef
}) => {
  const [optionsListVisible, __setOptionsListVisible] = useState(false);

  const onOptionClick = option => {
    onChange(option);
    setOptionsListVisible(false);
  };

  const setOptionsListVisible = useCallback(isVisible => {
    __setOptionsListVisible(isVisible);
  }, []);
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = event => {
      if (headerRef.current && popoverRef.current && !headerRef.current.contains(event.target) && !popoverRef.current.contains(event.target)) {
        setOptionsListVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [headerRef, popoverRef, setOptionsListVisible]);
  return {
    onOptionClick,
    optionsListVisible,
    setOptionsListVisible
  };
};