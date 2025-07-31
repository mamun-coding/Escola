const Heding = ({subHeading, heading}) => {
  return (
    <div className="flex justify-center mx-auto px-4 sm:px-6">
        <div className="text-center">
            <h3 className="text-[#2F57EF] text-sm sm:text-base font-semibold flex justify-center">{subHeading}</h3>
            <h2 className="pt-2 sm:pt-[10px] leading-tight sm:leading-14 text-black text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold max-w-4xl">{heading}</h2>
        </div>
       </div>
  )
}
   
export default Heding