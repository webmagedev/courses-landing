import {SelectedPage, ClassType} from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import {motion} from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
    {
        name: "JavaScript for Beginners",
        description:
            "Learn the fundamentals of JavaScript, the programming language of the web, through interactive examples and real-world projects.",
        image: image1,
    },
    {
        name: "Advanced React Development",
        image: image2,
    },
    {
        name: "Mastering CSS and Sass",
        description:
            "Dive deep into advanced CSS techniques and learn how to use Sass to build efficient and scalable stylesheets.",
        image: image3,
    },
    {
        name: "Full-Stack Web Development",
        description:
            "Explore both front-end and back-end development to build modern, responsive, and interactive web applications.",
        image: image4,
    },
    {
        name: "Data Structures and Algorithms",
        image: image5,
    },
    {
        name: "TypeScript Mastery",
        description:
            "Gain expertise in TypeScript, a superset of JavaScript, to build robust, type-safe, and scalable applications.",
        image: image6,
    },
];

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({setSelectedPage}: Props) => {
    return (
        <section id="ourclasses" className="w-full bg-primary-100 py-40">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
            >
                <motion.div
                    className="mx-auto w-5/6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0},
                    }}
                >
                    <div className="md:w-3/5">
                        <HText>OUR CLASSES</HText>
                        <p className="py-5">
                            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                            tellus quam porttitor. Mauris velit euismod elementum arcu neque
                            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                            enim mattis odio in risus nunc.
                        </p>
                    </div>
                </motion.div>
                <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                    <ul className="w-[2800px] whitespace-nowrap">
                        {classes.map((item: ClassType, index) => (
                            <Class
                                key={`${item.name}-${index}`}
                                name={item.name}
                                description={item.description}
                                image={item.image}
                            />
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    );
};

export default OurClasses;
