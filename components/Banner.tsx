import React from 'react'

type Props = {}

function Banner({}: Props) {
  return (
    <div>
      export default function App() {
  const [index, setIndex] = useState(false);

  const handleClose = useCallback(() => {
    setIndex(false);
  }, []);

  return (
    <LayoutGroup>
      <ul className={styles.gallery}>
        {[0, 1, 2, 3].map((item) => (
          <motion.li
            className={styles.item}
            key={item}
            layoutId={`${item}`}
            onClick={() => index === false && setIndex(item)}
            initial={{ borderRadius: "0.6rem" }}
          >
            <motion.div
              className={styles.placeholder}
              layoutId={`placeholder-${item}`}
            >
              <div />
              <div />
              <div />
            </motion.div>
            <motion.div
              className={styles.additional}
              layoutId={`additional-${item}`}
            >
              <div />
              <div />
              <div />
            </motion.div>
            <motion.div
              className={styles.itemClose}
              layoutId={`close-${item}`}
            />
          </motion.li>
        ))}
      </ul>
      <AnimatePresence>
        {index !== false && (
          <>
            <motion.div className={styles.modalContainer} key="modal">
              <motion.div
                className={styles.modal}
                layoutId={`${index}`}
                initial={{ borderRadius: "1.2rem" }}
              >
                <motion.div
                  className={styles.placeholder}
                  layoutId={`placeholder-${index}`}
                >
                  <div />
                  <div />
                  <div />
                </motion.div>
                <motion.div
                  className={styles.additional}
                  layoutId={`additional-${index}`}
                >
                  <div />
                  <div />
                  <div />
                </motion.div>
                <motion.div
                  className={styles.modalClose}
                  layoutId={`close-${index}`}
                  onClick={handleClose}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path
                      d="M15 5L5 15M5 5l5.03 5.03L15 15"
                      fill="transparent"
                      strokeWidth="2"
                      stroke="currentColor"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              className={styles.modalBackdrop}
              key="backdrop"
              onClick={handleClose}
              variants={{
                hidden: {
                  opacity: 0,
                  transition: {
                    duration: 0.16
                  }
                },
                visible: {
                  opacity: 0.8,
                  transition: {
                    delay: 0.04,
                    duration: 0.2
                  }
                }
              }}
              initial="hidden"
              exit="hidden"
              animate="visible"
            />
          </>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}
    </div>
  )
}

export default Banner