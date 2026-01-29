import { motion } from "framer-motion";
import aboutImg from "../assets/aboutImg.jpg";
import banner from "../assets/banners/banner2.jpg"
import useSEO from "../hooks/useSEO";

export default function AboutPage() {

    useSEO({
        title: "About Aster's Energy | Trusted Solar Company in Kota",
        description:
            "Aster's Energy is a trusted solar company in Kota providing quality rooftop solar installations, government subsidy support & long-term service."
    });

    return (
        <> <div className="w-full h-[25vh] md:h-[40vh] relative">
            <img
                src={banner}
                alt="Solar Banner"
                className="w-full h-full object-cover object-center opacity-90"
            />
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute inset-0 flex items-center justify-center pt-6">
                <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
                    About Us
                </h1>
            </div>
        </div>
            <section id="about" className="py-20 bg-gray-100 scroll-mt-14">

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl font-bold text-center text-blue-700 mb-12"
                >
                    About Us
                </motion.h2>

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <img
                            src={aboutImg}
                            alt="About Our Solar Energies"
                            className="rounded-xl shadow-lg w-full h-[500px] object-cover"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-5"
                    >
                        <p className="text-lg text-gray-700 leading-relaxed">
                            <strong>Aster's Energy</strong> is a trusted solar solutions provider in Kota,
                            offering on-grid, off-grid and hybrid rooftop solar systems along with water heaters
                            and subsidy support. With certified engineers and years of installation experience,
                            we ensure reliable service, high-efficiency solar panels, smooth installation
                            and long-term customer support. We proudly deal in leading brands such as
                            <strong> Waaree, Luminous, UTL, Adani, Vikram Solar</strong> and
                            <strong> Tata Power Solar</strong>, delivering durable and cost-effective solar
                            solutions for homes and businesses.
                        </p>

                        <div className="grid grid-cols-2 gap-4 pt-3">

                            <div className="bg-white p-4 rounded-lg shadow text-center border">
                                <h4 className="text-xl font-semibold text-blue-600">500+ </h4>
                                <p className="text-gray-600 text-sm">Installations</p>
                            </div>

                            <div className="bg-white p-4 rounded-lg shadow text-center border">
                                <h4 className="text-xl font-semibold text-blue-600">10+ Years</h4>
                                <p className="text-gray-600 text-sm">Experience</p>
                            </div>

                            <div className="bg-white p-4 rounded-lg shadow text-center border">
                                <h4 className="text-xl font-semibold text-blue-600">80%+</h4>
                                <p className="text-gray-600 text-sm">Electricity Savings</p>
                            </div>

                            <div className="bg-white p-4 rounded-lg shadow text-center border">
                                <h4 className="text-xl font-semibold text-blue-600">100% </h4>
                                <p className="text-gray-600 text-sm">Govt Subsidy Support</p>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </section>

            <section className="mt-16">
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
                    Why Choose Aster's Energy?
                </h2>

                <div className="grid md:grid-cols-4 grid-cols-1 gap-6 max-w-7xl mx-auto px-6">

                    <div className="bg-white shadow-lg rounded-xl p-6 text-center border hover:shadow-xl transition">
                        <div className="text-blue-900 text-4xl mb-3">⚡</div>
                        <h3 className="text-xl font-semibold mb-2">High Efficiency Panels</h3>
                        <p className="text-gray-600">
                            We use top-quality solar panels offering maximum power output.
                        </p>
                    </div>

                    <div className="bg-white shadow-lg rounded-xl p-6 text-center border hover:shadow-xl transition">
                        <div className="text-blue-900 text-4xl mb-3">👷‍♂️</div>
                        <h3 className="text-xl font-semibold mb-2">Certified Engineers</h3>
                        <p className="text-gray-600">
                            Our trained and certified team ensures smooth and safe installation.
                        </p>
                    </div>

                    <div className="bg-white shadow-lg rounded-xl p-6 text-center border hover:shadow-xl transition">
                        <div className="text-blue-900 text-4xl mb-3">⚙️</div>
                        <h3 className="text-xl font-semibold mb-2">Fast & Hassle-Free Service</h3>
                        <p className="text-gray-600">
                            Quick installation with long-term support for maintenance and service.
                        </p>
                    </div>

                    <div className="bg-white shadow-lg rounded-xl p-6 text-center border hover:shadow-xl transition">
                        <div className="text-blue-900 text-4xl mb-3">🏦</div>
                        <h3 className="text-xl font-semibold mb-2">Govt Subsidy Assistance</h3>
                        <p className="text-gray-600">
                            We help you easily apply and claim government subsidies.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mt-20 max-w-7xl mx-auto px-6">

                <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
                    Our Mission & Vision
                </h2>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-10">

                    <div className="bg-white border shadow-md rounded-xl p-8 hover:shadow-lg transition">
                        <h3 className="text-2xl font-semibold text-blue-900 mb-3">Our Mission</h3>
                        <p className="text-gray-700 leading-relaxed">
                            To make clean and affordable solar energy accessible to every home
                            and business in Rajasthan by delivering reliable, efficient and
                            cost-effective solar solutions.
                        </p>
                    </div>

                    <div className="bg-white border shadow-md rounded-xl p-8 hover:shadow-lg transition">
                        <h3 className="text-2xl font-semibold text-blue-900 mb-3">Our Vision</h3>
                        <p className="text-gray-700 leading-relaxed">
                            To become the most trusted solar energy provider in India by
                            promoting sustainable living and empowering communities through
                            renewable energy adoption.
                        </p>
                    </div>

                </div>
            </section>

        </>
    );
}
