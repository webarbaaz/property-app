'use client";'
import generateImageUrl from "@/lib/sanity/utils/imageBuilder";
import { PortableTextComponentProps, PortableTextReactComponents } from "@portabletext/react";
import Image from "next/image";
interface SanityImageAsset {
  _type: "image";
  asset: {
    _ref?: string;
    url?: string;
  };
}
export const EditorFormatter: Partial<PortableTextReactComponents> = {
    types: {
      image: ({ value }: { value: SanityImageAsset }) => {
        const imageUrl =
          value.asset.url ||
          (value.asset._ref ? generateImageUrl(value.asset._ref) : "");
  
        if (!imageUrl) return null;
  
        return (
          <Image
            src={imageUrl}
            alt="Sanity Image"
            width={500}
            height={500}
            className="rounded-lg w-full my-3"
          />
        );
      },
    },
    block: {
      h1: ({ children }: PortableTextComponentProps<unknown>) => (
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {children}
        </h1>
      ),
      h2: ({ children }: PortableTextComponentProps<unknown>) => (
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
          {children}
        </h2>
      ),
      h3: ({ children }: PortableTextComponentProps<unknown>) => (
        <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
          {children}
        </h3>
      ),
      h4: ({ children }: PortableTextComponentProps<unknown>) => (
        <h4 className="text-xl font-medium text-gray-600 dark:text-gray-400 mb-2">
          {children}
        </h4>
      ),
      h5: ({ children }: PortableTextComponentProps<unknown>) => (
        <h5 className="text-lg font-medium text-gray-500 dark:text-gray-500 mb-2">
          {children}
        </h5>
      ),
      h6: ({ children }: PortableTextComponentProps<unknown>) => (
        <h6 className="text-base font-medium text-gray-400 dark:text-gray-500 mb-2">
          {children}
        </h6>
      ),
      normal: ({ children }: PortableTextComponentProps<unknown>) => (
        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          {children}
        </p>
      ),
      blockquote: ({ children }: PortableTextComponentProps<unknown>) => (
        <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic text-gray-600 dark:text-gray-400 my-4">
          {children}
        </blockquote>
      ),
      ul: ({ children }: PortableTextComponentProps<unknown>) => (
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          {children}
        </ul>
      ),
      ol: ({ children }: PortableTextComponentProps<unknown>) => (
        <ol className="list-decimal pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          {children}
        </ol>
      ),
      li: ({ children }: PortableTextComponentProps<unknown>) => (
        <li className="ml-4">{children}</li>
      ),
    },
  };