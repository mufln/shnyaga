import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";

export default function Carouselle(props: { className?: string }) {
    return (
        <Carousel className="w-72">
            <CarouselContent>
                <CarouselItem>
                    <div className="p-1">
                        <Card>
                            <CardContent className="flex aspect-video items-center justify-center p-6">
                                <iframe width="230" height="150"
                                        src="https://rutube.ru/play/embed/beaeafa58d0366e645ede9c51b692724/"
                                        frameBorder="0" allow="clipboard-write; autoplay"
                                        allowFullScreen></iframe>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="p-1">
                        <Card>
                        <CardContent className="flex aspect-video items-center justify-center p-6">
                                <iframe width="230" height="150"
                                        src="https://rutube.ru/play/embed/e43bb91750dfae47ea8ece25a5984b33/"
                                        frameBorder="0" allow="clipboard-write; autoplay"
                                        allowFullScreen></iframe>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
        </Carousel>)
}