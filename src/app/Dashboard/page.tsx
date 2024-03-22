"use client";
import CardEstufa from "@/components/CardEstufa";

export default function dashboard() {
    return (
        <>
            <div>
                <div className="flex flex-row items-center justify-center pt-8 gap-8">
                    <CardEstufa topico="legumes" item="pimentao"></CardEstufa>
                    {/* <CardEstufa topico="legumes" item="cenoura"></CardEstufa>
                    <CardEstufa topico="legumes" item="abobora"></CardEstufa> */}
                </div>
            </div>
        </>
    );
}
