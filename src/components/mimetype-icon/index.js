import React from 'react'
import { MIMETYPE, IPFS_DIRECTORY_MIMETYPE } from '../../constants'
import styles from './styles.module.scss'

export const MimeTypeIcon = ({ mimeType, uri }) => {
  const getIcon = () => {
    switch (mimeType) {
      /* IMAGES */
      case MIMETYPE.BMP:
      case MIMETYPE.GIF:
      case MIMETYPE.JPEG:
      case MIMETYPE.PNG:
      case MIMETYPE.TIFF:
      case MIMETYPE.WEBP:
        return (
          <svg viewBox="0 0 512 512">
            <path d="M368,224c26.5,0,48-21.5,48-48c0-26.5-21.5-48-48-48c-26.5,0-48,21.5-48,48C320,202.5,341.5,224,368,224z" />
            <path d="M452,64H60c-15.6,0-28,12.7-28,28.3v327.4c0,15.6,12.4,28.3,28,28.3h392c15.6,0,28-12.7,28-28.3V92.3 C480,76.7,467.6,64,452,64z M348.9,261.7c-3-3.5-7.6-6.2-12.8-6.2c-5.1,0-8.7,2.4-12.8,5.7l-18.7,15.8c-3.9,2.8-7,4.7-11.5,4.7   c-4.3,0-8.2-1.6-11-4.1c-1-0.9-2.8-2.6-4.3-4.1L224,215.3c-4-4.6-10-7.5-16.7-7.5c-6.7,0-12.9,3.3-16.8,7.8L64,368.2V107.7   c1-6.8,6.3-11.7,13.1-11.7h357.7c6.9,0,12.5,5.1,12.9,12l0.3,260.4L348.9,261.7z" />
          </svg>
        )
      /* VECTOR */
      case MIMETYPE.SVG:
        return (
          <svg viewBox="0 0 32 32">
            <path d="M30,15H19v-1c0-0.6-0.4-1-1-1h-4c-0.6,0-1,0.4-1,1v0.5c-3.1-1-5.6-3.4-6.5-6.5H7c0.6,0,1-0.4,1-1V3c0-0.6-0.4-1-1-1H3  C2.4,2,2,2.4,2,3v4c0,0.6,0.4,1,1,1h1.4c0.7,2.9,2.6,5.4,5,7H2c-0.6,0-1,0.4-1,1s0.4,1,1,1h11v1c0,0.6,0.4,1,1,1h4c0.6,0,1-0.4,1-1  v-0.5c3.1,1,5.6,3.4,6.5,6.5H25c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1h4c0.6,0,1-0.4,1-1v-4c0-0.6-0.4-1-1-1h-1.4  c-0.7-2.9-2.6-5.4-5-7H30c0.6,0,1-0.4,1-1S30.6,15,30,15z" />
          </svg>
        )
      /* HTML ZIP */
      case IPFS_DIRECTORY_MIMETYPE:
      case MIMETYPE.ZIP:
      case MIMETYPE.ZIP1:
      case MIMETYPE.ZIP2:
        return (
          <svg viewBox="0 0 96 96">
            <path d="M24.8452,25.3957a6.0129,6.0129,0,0,0-8.4487.7617L1.3974,44.1563a5.9844,5.9844,0,0,0,0,7.687L16.3965,69.8422a5.9983,5.9983,0,1,0,9.21-7.687L13.8068,48l11.8-14.1554A6,6,0,0,0,24.8452,25.3957Z" />
            <path d="M55.1714,12.1192A6.0558,6.0558,0,0,0,48.1172,16.83L36.1179,76.8262A5.9847,5.9847,0,0,0,40.8286,83.88a5.7059,5.7059,0,0,0,1.1835.1172A5.9949,5.9949,0,0,0,47.8828,79.17L59.8821,19.1735A5.9848,5.9848,0,0,0,55.1714,12.1192Z" />
            <path d="M94.6026,44.1563,79.6035,26.1574a5.9983,5.9983,0,1,0-9.21,7.687L82.1932,48l-11.8,14.1554a5.9983,5.9983,0,1,0,9.21,7.687L94.6026,51.8433A5.9844,5.9844,0,0,0,94.6026,44.1563Z" />
          </svg>
        )
      /* VIDEOS */
      case MIMETYPE.MP4:
      case MIMETYPE.OGV:
      case MIMETYPE.QUICKTIME:
      case MIMETYPE.WEBM:
        return (
          <svg viewBox="0 0 16 18">
            <path d="M14,0 L14,2 L12,2 L12,0 L4,0 L4,2 L2,2 L2,0 L0,0 L0,18 L2,18 L2,16 L4,16 L4,18 L12,18 L12,16 L14,16 L14,18 L16,18 L16,0 L14,0 L14,0 Z M4,14 L2,14 L2,12 L4,12 L4,14 L4,14 Z M4,10 L2,10 L2,8 L4,8 L4,10 L4,10 Z M4,6 L2,6 L2,4 L4,4 L4,6 L4,6 Z M14,14 L12,14 L12,12 L14,12 L14,14 L14,14 Z M14,10 L12,10 L12,8 L14,8 L14,10 L14,10 Z M14,6 L12,6 L12,4 L14,4 L14,6 L14,6 Z" />
          </svg>
        )
      /* 3D */
      case MIMETYPE.GLB:
      case MIMETYPE.GLTF:
        return (
          <svg viewBox="0 0 20 20">
            <path d="M 10.005859 0.5 A 0.50083746 0.50083746 0 0 0 9.7539062 0.56445312 L 1.7539062 5.0644531 A 0.50083746 0.50083746 0 0 0 1.5 5.5 L 1.5 14.5 A 0.50083746 0.50083746 0 0 0 1.7539062 14.935547 L 9.7539062 19.435547 A 0.50083746 0.50083746 0 0 0 10.246094 19.435547 L 18.246094 14.935547 A 0.50083746 0.50083746 0 0 0 18.5 14.5 L 18.5 5.5 A 0.50083746 0.50083746 0 0 0 18.246094 5.0644531 L 10.246094 0.56445312 A 0.50083746 0.50083746 0 0 0 10.005859 0.5 z M 10 1.5742188 L 16.978516 5.5 L 10 9.4257812 L 3.0214844 5.5 L 10 1.5742188 z M 2.5 6.3554688 L 9.5 10.292969 L 9.5 18.144531 L 2.5 14.207031 L 2.5 6.3554688 z M 17.5 6.3554688 L 17.5 14.207031 L 10.5 18.144531 L 10.5 10.292969 L 17.5 6.3554688 z" />
          </svg>
        )
      /* AUDIO */
      case MIMETYPE.MP3:
      case MIMETYPE.OGA:
        return (
          <svg viewBox="0 0 64 64">
            <path d="M23.727,16.403v4.84v5.058v14.236c-1.268-0.777-2.754-1.233-4.35-1.233c-4.612,0-8.353,3.74-8.353,8.349  c0,4.614,3.74,8.354,8.353,8.354c4.61,0,8.349-3.739,8.35-8.352h0V25.151l21.25-6.109V33.33c-1.268-0.777-2.754-1.233-4.35-1.233  c-4.614,0-8.353,3.739-8.353,8.348c0,4.613,3.739,8.354,8.353,8.354c4.344,0,7.914-3.325,8.31-7.57h0.04V17.892v-3.586V7.993  L23.727,16.403z" />
          </svg>
        )
      default:
        return null
    }
  }

  return null

  // return (
  //   <div className={styles.container}>
  //     {getIcon()}
  //   </div>
  // )
}
