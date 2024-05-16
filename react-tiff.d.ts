declare module 'react-tiff' {
    export interface TIFFViewerProps {
      tiff: string;
      lang?: string;
      paginate?: string;
      buttonColor?: string;
      printable?: boolean;
    }
  
    export const TIFFViewer: React.FC<TIFFViewerProps>;
  }