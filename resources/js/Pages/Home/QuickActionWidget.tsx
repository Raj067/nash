import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
// import { Button } from "@headlessui/react";
import { TestTube, Phone, Heart } from "lucide-react";
import React from "react";

function QuickActionWidget() {
    return (
        <section className="py-16 bg-blue-900 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Huduma za Haraka za VVU
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="bg-white/10 border-white/20 text-white">
                        <CardHeader className="text-center">
                            <TestTube className="h-12 w-12 mx-auto mb-4" />
                            <CardTitle>Upimaji wa VVU</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="mb-4">
                                Pata upimaji wa VVU kwa njia ya siri na ya bure
                            </p>
                            <Button
                                // variant="outline"
                                className="bg-custom-red hover:bg-custom-red/80 text-white"
                            >
                                Pima Sasa
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/10 border-white/20 text-white">
                        <CardHeader className="text-center">
                            <Phone className="h-12 w-12 mx-auto mb-4" />
                            <CardTitle>Msaada wa Haraka</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="mb-4">
                                Piga simu 199 kwa msaada wa haraka wa VVU
                            </p>
                            <Button
                                // variant="outline"
                                className="bg-custom-red hover:bg-custom-red/80 text-white"
                            >
                                Piga Simu 199
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/10 border-white/20 text-white">
                        <CardHeader className="text-center">
                            <Heart className="h-12 w-12 mx-auto mb-4" />
                            <CardTitle>Ushauri na Msaada</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="mb-4">
                                Pata ushauri wa kisaikolojia na msaada wa
                                kijamii
                            </p>
                            <Button
                                // variant="outline"
                                className="bg-custom-red hover:bg-custom-red/80 text-white"
                            >
                                Pata Ushauri
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}

export default QuickActionWidget;
