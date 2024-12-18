import { cloneElement, useContext, useEffect, useRef } from "react";
import AnimateHeight from "react-animate-height";
import classnames from "classnames";

import { RulebookContext } from "../../context/rulebookContext";

import "./section.css";
import "./section-colorants.css";
import "./section-print.css";

const Section = ({
  background,
  children,
  coordinates = 0,
  depth = 1,
  header,
  isChapterIntroColumn,
  isClassified,
  isInset,
  isOpenAtDepth = 2,
  metabolized,
  topicKey,
  introContent,
}) => {
  const { openSectionList, setOpenSectionList, isAllForcedOpen, wasAllOpened, setWasAllOpened, topicMap } =
    useContext(RulebookContext);
  const isVisible = openSectionList.has(coordinates);
  const sectionContainer = useRef(null);
  const Heading = "h" + depth;

  useEffect(() => {
    if (depth > isOpenAtDepth) {
      openSectionList.add(coordinates);
    }
    const topic = topicKey ? topicKey : header.replace(/\s+/g, "").replace("&", "And");
    if (topicMap.current[topic]) {
      console.log("topic exists, rename this or add a topicKey", topic);
    } else {
      topicMap.current[topic] = coordinates;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const appendChildrenProps = () => {
    let childSectionCount = 0;
    let newChildren = children.map((child, index) => {
      let modifiedChild = child;
      if (child?.props?.header) {
        childSectionCount++;
        let childCoordinates = `${coordinates}.${childSectionCount}`;
        modifiedChild = cloneElement(child, {
          depth: depth + 1,
          coordinates: childCoordinates,
          key: coordinates + index,
        });
      }
      return modifiedChild;
    });
    return newChildren;
  };

  const onHeaderClick = () => {
    if (isVisible) {
      scrollToSection();
    } else {
      toggleVisibility();
    }
  };

  const scrollToSection = () => {
    const offset = depth * 68;
    const position = sectionContainer?.current?.getBoundingClientRect().top;
    const scrollUpBy = position - offset;
    window.scrollBy(0, scrollUpBy);
  };

  const toggleVisibility = (event) => {
    event?.stopPropagation();
    let newOpenSectionList = new Set(openSectionList);
    if (isVisible) {
      newOpenSectionList.delete(coordinates);
      if (wasAllOpened) {
        setWasAllOpened(false);
      }
    } else {
      newOpenSectionList.add(coordinates);
    }
    setOpenSectionList(newOpenSectionList);
  };

  return (
    <>
      <section
        className={classnames({
          section: true,
          [`depth${depth}`]: true,
          openSection: isVisible,
          hasBackground: !!background,
          [background]: !!background,
          classified: isClassified,
          inset: isInset,
          [`metabSection${metabolized}`]: !!metabolized,
          hasAccentColor: !!metabolized,
        })}
        ref={sectionContainer}
        id={`section${coordinates}`}
      >
        <Heading onClick={onHeaderClick} className="sectionHeader">
          {header}
          <div className={"sectionCoordinates"}>{coordinates}</div>
        </Heading>

        <AnimateHeight duration={300} height={isVisible || isAllForcedOpen ? "auto" : 0}>
          {introContent}
          <div
            className={classnames({
              sectionChildren: true,
              chapterContent: depth === 1,
            })}
          >
            {!isAllForcedOpen ? (
              <button className="visibilityToggle" onClick={toggleVisibility}>
                X
              </button>
            ) : null}
            {children && children.map ? appendChildrenProps() : children}
          </div>
        </AnimateHeight>
      </section>
    </>
  );
};

export default Section;
