
const SkillIcon = ({img, name}) => {
    return (
        <div className="px-6 py-6 mx-4 bg-white rounded-2xl inline-block"
            style={{
                clipPath: 'polygon(0% 0%, 70% 0%, 100% 30%, 100% 100%, 0% 100%)',
                WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0.7) 100%)'
            }}>
            <img src={img} alt="" className="w-12 h-12" />
            <p className="text-sm font-medium mt-2">{name}</p>
        </div>
    );
};

export default SkillIcon;