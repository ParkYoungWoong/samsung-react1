import { useOutlet, useLocation, ScrollRestoration } from 'react-router-dom'
import Header from '@/components/Header'
import { motion, AnimatePresence } from 'framer-motion'

export default function Default() {
  const location = useLocation()
  const outlet = useOutlet()
  return (
    <>
      <Header />
      <AnimatePresence>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, position: 'absolute' }}
          transition={{ duration: 0.3 }}>
          {outlet}
        </motion.div>
      </AnimatePresence>
      <ScrollRestoration />
    </>
  )
}
