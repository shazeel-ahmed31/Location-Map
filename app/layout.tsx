import type {Metadata} from 'next';import './globals.css';
export const metadata:Metadata={title:'Location Component Demo',description:'Configurable sample location with map and navigation links.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>;}
