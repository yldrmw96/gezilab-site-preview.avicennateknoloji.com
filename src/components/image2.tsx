"use client"

import type React from "react"

import Image from "next/image"
import { useState, forwardRef } from "react"
import { cn } from "@/lib/utils"
import { AlertCircle, Loader2 } from "lucide-react"

export interface Image2Props {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  fallbackSrc?: string
  showLoadingSpinner?: boolean
  showErrorIcon?: boolean
  loadingClassName?: string
  errorClassName?: string
  onLoadingComplete?: () => void
  onError?: () => void
  priority?: boolean
  quality?: number
  sizes?: string
  placeholder?: "blur" | "empty"
  blurDataURL?: string
  style?: React.CSSProperties
  unoptimized?: boolean
}

export const Image2 = forwardRef<HTMLDivElement, Image2Props>(
  (
    {
      src,
      alt,
      width,
      height,
      fill = false,
      className,
      fallbackSrc = "/placeholder.svg?height=400&width=400&text=Image+Not+Found",
      showLoadingSpinner = true,
      showErrorIcon = true,
      loadingClassName,
      errorClassName,
      onLoadingComplete,
      onError,
      priority = false,
      quality = 75,
      sizes,
      placeholder = "empty",
      blurDataURL,
      style,
      unoptimized = false,
      ...props
    },
    ref,
  ) => {
    const [imageState, setImageState] = useState<"loading" | "loaded" | "error">("loading")
    const [imageSrc, setImageSrc] = useState(src)

    const handleLoad = () => {
      setImageState("loaded")
      onLoadingComplete?.()
    }

    const handleError = () => {
      if (imageSrc !== fallbackSrc) {
        setImageSrc(fallbackSrc)
        setImageState("loading")
      } else {
        setImageState("error")
        onError?.()
      }
    }

    const containerClasses = cn("relative group overflow-hidden", fill && "w-full h-full", className)

    const imageClasses = cn("group-[.bg-cover]:bg-cover group-[.bg-contain]:bg-contain group-[.object-cover]:object-cover group-[.object-contain]:object-contain transition-opacity duration-300", imageState === "loaded" ? "opacity-100" : "opacity-0")

    const loadingClasses = cn(
      "absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800",
      "transition-opacity duration-300",
      imageState === "loading" ? "opacity-100" : "opacity-0",
      loadingClassName,
    )

    const errorClasses = cn(
      "absolute inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400",
      "transition-opacity duration-300",
      imageState === "error" ? "opacity-100" : "opacity-0",
      errorClassName,
    )

    if (fill) {
      return (
        <div ref={ref} className={containerClasses} style={style} {...props}>
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={alt}
            fill
            className={imageClasses}
            onLoad={handleLoad}
            onError={handleError}
            priority={priority}
            quality={quality}
            sizes={sizes}
            placeholder={placeholder}
            blurDataURL={blurDataURL}
            unoptimized={unoptimized}
          />

          {/* Loading State */}
          {imageState === "loading" && (
            <div className={loadingClasses}>
              {showLoadingSpinner && <Loader2 className="w-8 h-8 animate-spin text-gray-400" />}
            </div>
          )}

          {/* Error State */}
          {imageState === "error" && (
            <div className={errorClasses}>
              {showErrorIcon && (
                <>
                  <AlertCircle className="w-12 h-12 mb-2" />
                  <span className="text-sm text-center">Failed to load image</span>
                </>
              )}
            </div>
          )}
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={containerClasses}
        style={{
          width: width ? `${width}px` : "auto",
          height: height ? `${height}px` : "auto",
          ...style,
        }}
        {...props}
      >
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={alt}
          width={width || 400}
          height={height || 400}
          className={imageClasses}
          onLoad={handleLoad}
          onError={handleError}
          priority={priority}
          quality={quality}
          sizes={sizes}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          unoptimized={unoptimized}
        />

        {/* Loading State */}
        {imageState === "loading" && (
          <div className={loadingClasses}>
            {showLoadingSpinner && <Loader2 className="w-8 h-8 animate-spin text-gray-400" />}
          </div>
        )}

        {/* Error State */}
        {imageState === "error" && (
          <div className={errorClasses}>
            {showErrorIcon && (
              <>
                <AlertCircle className="w-12 h-12 mb-2" />
                <span className="text-sm text-center">Failed to load image</span>
              </>
            )}
          </div>
        )}
      </div>
    )
  },
)

Image2.displayName = "Image2"
