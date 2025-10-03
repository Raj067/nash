import React, { useState } from "react";
import { Head, useForm, router } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group";
import { Checkbox } from "@/Components/ui/checkbox";
import { Alert, AlertDescription } from "@/Components/ui/alert";
import {
    Shield,
    Lock,
    AlertTriangle,
    Phone,
    Mail,
    FileText,
    Upload,
    Eye,
    EyeOff,
    CheckCircle,
} from "lucide-react";

const SeahReport = () => {
    const [showPersonalInfo, setShowPersonalInfo] = useState(false);
    const [isAnonymous, setIsAnonymous] = useState(true);
    const [files, setFiles] = useState<File[]>([]);

    const { data, setData, post, processing, errors, reset } = useForm({
        report_type: "seah",
        incident_type: "",
        description: "",
        incident_date: "",
        incident_location: "",
        persons_involved: "",
        witnesses: "",
        previous_reports: "",
        is_anonymous: true,
        reporter_name: "",
        reporter_email: "",
        reporter_phone: "",
        reporter_relationship: "",
        consent_investigation: false,
        consent_contact: false,
        additional_support: "",
        attachments: [] as File[],
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            if (key === "attachments") {
                files.forEach((file, index) => {
                    formData.append(`attachments[${index}]`, file);
                });
            } else {
                formData.append(key, value.toString());
            }
        });

        router.post("/report/seah", formData, {
            forceFormData: true,
            onSuccess: () => {
                reset();
                setFiles([]);
            },
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newFiles = Array.from(e.target.files);
            setFiles((prev) => [...prev, ...newFiles]);
            setData("attachments", [...files, ...newFiles]);
        }
    };

    const removeFile = (index: number) => {
        const newFiles = files.filter((_, i) => i !== index);
        setFiles(newFiles);
        setData("attachments", newFiles);
    };

    const incidentTypes = [
        {
            value: "sexual_abuse",
            label: "Sexual Abuse",
            description: "Physical intrusion of a sexual nature",
        },
        {
            value: "sexual_harassment",
            label: "Sexual Harassment",
            description: "Unwelcome conduct of a sexual nature",
        },
        {
            value: "sexual_exploitation",
            label: "Sexual Exploitation",
            description:
                "Abuse of position of vulnerability for sexual purposes",
        },
        {
            value: "other",
            label: "Other",
            description: "Other forms of misconduct or abuse",
        },
    ];

    return (
        <PublicLayout title="SEAH Report - Confidential Reporting">
            <Head title="SEAH Report - Confidential" />

            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50 py-12">
                <div className="container mx-auto px-4 max-w-4xl">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center mb-4">
                            <div className="bg-red-100 p-3 rounded-full mr-4">
                                <Shield className="h-8 w-8 text-red-600" />
                            </div>
                            <div className="bg-green-100 p-2 rounded-full">
                                <Lock className="h-6 w-6 text-green-600" />
                            </div>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Confidential SEAH Report
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Report Sexual Exploitation, Abuse, and Harassment
                            incidents safely and confidentially. Your report
                            will be handled with utmost care and
                            professionalism.
                        </p>
                    </div>

                    {/* Security Notice */}
                    <Alert className="mb-8 border-green-200 bg-green-50">
                        <Lock className="h-4 w-4 text-green-600" />
                        <AlertDescription className="text-green-800">
                            <strong>Secure & Confidential:</strong> This form
                            uses encrypted transmission. You can choose to
                            remain anonymous or provide contact information for
                            follow-up.
                        </AlertDescription>
                    </Alert>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Anonymous vs Identified Reporting */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Eye className="h-5 w-5 mr-2 text-blue-600" />
                                    Reporting Preference
                                </CardTitle>
                                <CardDescription>
                                    Choose whether to report anonymously or
                                    provide your contact information
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <RadioGroup
                                    value={
                                        isAnonymous ? "anonymous" : "identified"
                                    }
                                    onValueChange={(value) => {
                                        const anonymous = value === "anonymous";
                                        setIsAnonymous(anonymous);
                                        setData("is_anonymous", anonymous);
                                        if (anonymous) {
                                            setData("reporter_name", "");
                                            setData("reporter_email", "");
                                            setData("reporter_phone", "");
                                        }
                                    }}
                                >
                                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                                        <RadioGroupItem
                                            value="anonymous"
                                            id="anonymous"
                                        />
                                        <Label
                                            htmlFor="anonymous"
                                            className="flex-1"
                                        >
                                            <div className="font-medium">
                                                Anonymous Report
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                Submit without providing
                                                personal information
                                            </div>
                                        </Label>
                                        <EyeOff className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                                        <RadioGroupItem
                                            value="identified"
                                            id="identified"
                                        />
                                        <Label
                                            htmlFor="identified"
                                            className="flex-1"
                                        >
                                            <div className="font-medium">
                                                Identified Report
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                Provide contact information for
                                                follow-up
                                            </div>
                                        </Label>
                                        <Eye className="h-5 w-5 text-gray-400" />
                                    </div>
                                </RadioGroup>
                            </CardContent>
                        </Card>

                        {/* Personal Information (if not anonymous) */}
                        {!isAnonymous && (
                            <Card>
                                <CardHeader>
                                    <CardTitle>Contact Information</CardTitle>
                                    <CardDescription>
                                        This information will be kept strictly
                                        confidential
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="reporter_name">
                                                Full Name
                                            </Label>
                                            <Input
                                                id="reporter_name"
                                                value={data.reporter_name}
                                                onChange={(e) =>
                                                    setData(
                                                        "reporter_name",
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="Your full name"
                                            />
                                            {errors.reporter_name && (
                                                <p className="text-sm text-red-600 mt-1">
                                                    {errors.reporter_name}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <Label htmlFor="reporter_email">
                                                Email Address
                                            </Label>
                                            <Input
                                                id="reporter_email"
                                                type="email"
                                                value={data.reporter_email}
                                                onChange={(e) =>
                                                    setData(
                                                        "reporter_email",
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="your.email@example.com"
                                            />
                                            {errors.reporter_email && (
                                                <p className="text-sm text-red-600 mt-1">
                                                    {errors.reporter_email}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="reporter_phone">
                                                Phone Number (Optional)
                                            </Label>
                                            <Input
                                                id="reporter_phone"
                                                value={data.reporter_phone}
                                                onChange={(e) =>
                                                    setData(
                                                        "reporter_phone",
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="+255 XXX XXX XXX"
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="reporter_relationship">
                                                Relationship to Incident
                                            </Label>
                                            <Input
                                                id="reporter_relationship"
                                                value={
                                                    data.reporter_relationship
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        "reporter_relationship",
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="e.g., Witness, Victim, Colleague"
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        )}

                        {/* Incident Details */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <AlertTriangle className="h-5 w-5 mr-2 text-amber-600" />
                                    Incident Details
                                </CardTitle>
                                <CardDescription>
                                    Provide as much detail as you feel
                                    comfortable sharing
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <Label>Type of Incident</Label>
                                    <RadioGroup
                                        value={data.incident_type}
                                        onValueChange={(value) =>
                                            setData("incident_type", value)
                                        }
                                        className="mt-2"
                                    >
                                        {incidentTypes.map((type) => (
                                            <div
                                                key={type.value}
                                                className="flex items-center space-x-2 p-3 border rounded-lg"
                                            >
                                                <RadioGroupItem
                                                    value={type.value}
                                                    id={type.value}
                                                />
                                                <Label
                                                    htmlFor={type.value}
                                                    className="flex-1"
                                                >
                                                    <div className="font-medium">
                                                        {type.label}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        {type.description}
                                                    </div>
                                                </Label>
                                            </div>
                                        ))}
                                    </RadioGroup>
                                    {errors.incident_type && (
                                        <p className="text-sm text-red-600 mt-1">
                                            {errors.incident_type}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <Label htmlFor="description">
                                        Detailed Description *
                                    </Label>
                                    <Textarea
                                        id="description"
                                        value={data.description}
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                        placeholder="Please describe what happened in as much detail as you feel comfortable providing..."
                                        rows={6}
                                        required
                                    />
                                    {errors.description && (
                                        <p className="text-sm text-red-600 mt-1">
                                            {errors.description}
                                        </p>
                                    )}
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="incident_date">
                                            Date of Incident (if known)
                                        </Label>
                                        <Input
                                            id="incident_date"
                                            type="date"
                                            value={data.incident_date}
                                            onChange={(e) =>
                                                setData(
                                                    "incident_date",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="incident_location">
                                            Location of Incident
                                        </Label>
                                        <Input
                                            id="incident_location"
                                            value={data.incident_location}
                                            onChange={(e) =>
                                                setData(
                                                    "incident_location",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Where did this occur?"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="persons_involved">
                                        Persons Involved
                                    </Label>
                                    <Textarea
                                        id="persons_involved"
                                        value={data.persons_involved}
                                        onChange={(e) =>
                                            setData(
                                                "persons_involved",
                                                e.target.value
                                            )
                                        }
                                        placeholder="Names, positions, or descriptions of people involved (if known)"
                                        rows={3}
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="witnesses">
                                        Witnesses (if any)
                                    </Label>
                                    <Textarea
                                        id="witnesses"
                                        value={data.witnesses}
                                        onChange={(e) =>
                                            setData("witnesses", e.target.value)
                                        }
                                        placeholder="Names or descriptions of any witnesses"
                                        rows={2}
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* File Attachments */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Upload className="h-5 w-5 mr-2 text-blue-600" />
                                    Supporting Evidence (Optional)
                                </CardTitle>
                                <CardDescription>
                                    Upload any relevant documents, images, or
                                    other evidence
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                                    <Label
                                        htmlFor="file-upload"
                                        className="cursor-pointer"
                                    >
                                        <span className="text-blue-600 hover:text-blue-800 font-medium">
                                            Click to upload files
                                        </span>
                                        <span className="text-gray-500">
                                            {" "}
                                            or drag and drop
                                        </span>
                                    </Label>
                                    <Input
                                        id="file-upload"
                                        type="file"
                                        multiple
                                        onChange={handleFileChange}
                                        className="hidden"
                                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.mp3,.mp4,.wav"
                                    />
                                    <p className="text-xs text-gray-500 mt-1">
                                        PDF, DOC, Images, Audio, Video files
                                        (Max 10MB each)
                                    </p>
                                </div>

                                {files.length > 0 && (
                                    <div className="mt-4 space-y-2">
                                        {files.map((file, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center justify-between p-2 bg-gray-50 rounded"
                                            >
                                                <span className="text-sm text-gray-700">
                                                    {file.name}
                                                </span>
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() =>
                                                        removeFile(index)
                                                    }
                                                    className="text-red-600 hover:text-red-800"
                                                >
                                                    Remove
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        {/* Consent and Additional Information */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Consent and Follow-up</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-2">
                                        <Checkbox
                                            id="consent_investigation"
                                            checked={data.consent_investigation}
                                            onCheckedChange={(checked) =>
                                                setData(
                                                    "consent_investigation",
                                                    !!checked
                                                )
                                            }
                                        />
                                        <Label
                                            htmlFor="consent_investigation"
                                            className="text-sm leading-relaxed"
                                        >
                                            I consent to NASHCOP investigating
                                            this matter and taking appropriate
                                            action
                                        </Label>
                                    </div>

                                    {!isAnonymous && (
                                        <div className="flex items-start space-x-2">
                                            <Checkbox
                                                id="consent_contact"
                                                checked={data.consent_contact}
                                                onCheckedChange={(checked) =>
                                                    setData(
                                                        "consent_contact",
                                                        !!checked
                                                    )
                                                }
                                            />
                                            <Label
                                                htmlFor="consent_contact"
                                                className="text-sm leading-relaxed"
                                            >
                                                I consent to being contacted for
                                                additional information if needed
                                            </Label>
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <Label htmlFor="additional_support">
                                        Additional Support Needed
                                    </Label>
                                    <Textarea
                                        id="additional_support"
                                        value={data.additional_support}
                                        onChange={(e) =>
                                            setData(
                                                "additional_support",
                                                e.target.value
                                            )
                                        }
                                        placeholder="Do you need any specific support or assistance?"
                                        rows={3}
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Emergency Contacts */}
                        <Alert className="border-amber-200 bg-amber-50">
                            <Phone className="h-4 w-4 text-amber-600" />
                            <AlertDescription className="text-amber-800">
                                <strong>Need immediate help?</strong> Call our
                                emergency hotline at{" "}
                                <a
                                    href="tel:117"
                                    className="font-bold underline"
                                >
                                    117 (Free)
                                </a>{" "}
                                or email{" "}
                                <a
                                    href="mailto:nacp@afya.go.tz"
                                    className="font-bold underline"
                                >
                                    nacp@afya.go.tz
                                </a>
                            </AlertDescription>
                        </Alert>

                        {/* Submit Button */}
                        <div className="flex justify-center pt-6">
                            <Button
                                type="submit"
                                size="lg"
                                disabled={processing}
                                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3"
                            >
                                {processing ? (
                                    <>
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                        Submitting Report...
                                    </>
                                ) : (
                                    <>
                                        <Shield className="h-4 w-4 mr-2" />
                                        Submit Confidential Report
                                    </>
                                )}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </PublicLayout>
    );
};

export default SeahReport;
