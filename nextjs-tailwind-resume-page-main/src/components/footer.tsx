import { Typography} from "@material-tailwind/react";
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <Typography 
          className="text-center font-normal !text-gray-700"
          placeholder="" 
              onPointerEnterCapture={() => {}} 
               onPointerLeaveCapture={() => {}}>
            &copy; {CURRENT_YEAR} Made with{" "}
            <a href="https://www.material-tailwind.com" target="_blank">
              Material Tailwind _ 
            </a>{" "}
            Template used made by{" "}
            <a href="https://www.creative-tim.com" target="_blank">
              Creative Tim
            </a>
            .
          </Typography>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
