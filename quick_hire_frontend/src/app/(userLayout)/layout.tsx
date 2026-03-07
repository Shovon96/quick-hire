import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const dynamic = "force-dynamic";

const UserLayout = async ({ children }: { children: React.ReactNode }) => {

    return (
        <>
            <Navbar />
            <div className="min-h-screen">
                {children}
            </div>
            <Footer />
        </>
    );
};

export default UserLayout;