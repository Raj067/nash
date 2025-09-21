import React, { useRef, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";

interface RichTextEditorProps {
    value: string;
    onChange: (content: string) => void;
    placeholder?: string;
    height?: number;
    disabled?: boolean;
}

export function RichTextEditor({
    value,
    onChange,
    placeholder = "Start writing...",
    height = 400,
    disabled = false,
}: RichTextEditorProps) {
    const editorRef = useRef<any>(null);

    const handleEditorChange = (content: string) => {
        onChange(content);
    };

    const handleImageUpload = (blobInfo: any, progress: any) => {
        return new Promise<string>((resolve, reject) => {
            const formData = new FormData();
            formData.append("image", blobInfo.blob(), blobInfo.filename());

            fetch(route("admin.blogs.upload-image"), {
                method: "POST",
                body: formData,
                headers: {
                    "X-CSRF-TOKEN":
                        document
                            .querySelector('meta[name="csrf-token"]')
                            ?.getAttribute("content") || "",
                },
            })
                .then((response) => response.json())
                .then((result) => {
                    if (result.success) {
                        resolve(result.url);
                    } else {
                        reject(result.message || "Upload failed");
                    }
                })
                .catch((error) => {
                    reject("Upload failed: " + error.message);
                });
        });
    };

    return (
        <div className="rich-text-editor">
            <Editor
                apiKey="ettzopxqmal8hv2xdfzeytqozje9p4jq0n3tjyvuwkbxni39"
                onInit={(evt, editor) => (editorRef.current = editor)}
                value={value}
                onEditorChange={handleEditorChange}
                disabled={disabled}
                init={{
                    height: height,
                    menubar: true,
                    plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "help",
                        "wordcount",
                        "emoticons",
                        "template",
                        "codesample",
                        "hr",
                        "pagebreak",
                        "nonbreaking",
                    ],
                    toolbar:
                        "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | " +
                        "alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | " +
                        "forecolor backcolor removeformat | pagebreak | charmap emoticons | " +
                        "fullscreen preview save print | insertfile image media template link anchor codesample | " +
                        "ltr rtl | help",
                    content_style: `
                        body { 
                            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; 
                            font-size: 14px; 
                            line-height: 1.6;
                            color: #374151;
                        }
                        img { max-width: 100%; height: auto; }
                        table { border-collapse: collapse; width: 100%; }
                        table td, table th { border: 1px solid #ddd; padding: 8px; }
                        table th { background-color: #f2f2f2; }
                        blockquote { 
                            border-left: 4px solid #e5e7eb; 
                            margin: 1.5em 0; 
                            padding-left: 1em; 
                            color: #6b7280;
                        }
                        code { 
                            background-color: #f3f4f6; 
                            padding: 2px 4px; 
                            border-radius: 3px; 
                            font-family: 'Monaco', 'Consolas', monospace;
                        }
                        pre { 
                            background-color: #1f2937; 
                            color: #f9fafb; 
                            padding: 1em; 
                            border-radius: 6px; 
                            overflow-x: auto;
                        }
                        h1, h2, h3, h4, h5, h6 { 
                            margin-top: 1.5em; 
                            margin-bottom: 0.5em; 
                            font-weight: 600;
                        }
                        h1 { font-size: 2em; }
                        h2 { font-size: 1.5em; }
                        h3 { font-size: 1.25em; }
                        ul, ol { margin: 1em 0; padding-left: 2em; }
                        li { margin: 0.25em 0; }
                    `,
                    placeholder: placeholder,
                    branding: false,
                    promotion: false,
                    resize: "vertical",
                    images_upload_handler: handleImageUpload,
                    automatic_uploads: true,
                    file_picker_types: "image",
                    image_advtab: true,
                    image_caption: true,
                    image_description: false,
                    image_title: true,
                    image_class_list: [
                        { title: "None", value: "" },
                        { title: "Responsive", value: "img-responsive" },
                        { title: "Rounded", value: "rounded" },
                        { title: "Circle", value: "rounded-full" },
                        { title: "Shadow", value: "shadow-lg" },
                    ],
                    link_class_list: [
                        { title: "None", value: "" },
                        { title: "Button Primary", value: "btn btn-primary" },
                        {
                            title: "Button Secondary",
                            value: "btn btn-secondary",
                        },
                        { title: "External Link", value: "external-link" },
                    ],
                    table_class_list: [
                        { title: "None", value: "" },
                        { title: "Striped", value: "table-striped" },
                        { title: "Bordered", value: "table-bordered" },
                        { title: "Responsive", value: "table-responsive" },
                    ],
                    templates: [
                        {
                            title: "News Article",
                            description: "Template for news articles",
                            content: `
                                <h2>Article Title</h2>
                                <p><em>Published on [Date] by [Author]</em></p>
                                <p><strong>Summary:</strong> Brief summary of the article...</p>
                                <h3>Main Content</h3>
                                <p>Start writing your article content here...</p>
                                <h3>Key Points</h3>
                                <ul>
                                    <li>Point 1</li>
                                    <li>Point 2</li>
                                    <li>Point 3</li>
                                </ul>
                            `,
                        },
                        {
                            title: "Event Announcement",
                            description: "Template for event announcements",
                            content: `
                                <h2>Event Title</h2>
                                <p><strong>Date:</strong> [Event Date]</p>
                                <p><strong>Time:</strong> [Event Time]</p>
                                <p><strong>Location:</strong> [Event Location]</p>
                                <h3>About the Event</h3>
                                <p>Description of the event...</p>
                                <h3>Registration</h3>
                                <p>Registration information and contact details...</p>
                            `,
                        },
                        {
                            title: "Press Release",
                            description: "Template for press releases",
                            content: `
                                <p><strong>FOR IMMEDIATE RELEASE</strong></p>
                                <h2>Press Release Title</h2>
                                <p><em>[City, Date] –</em> Lead paragraph with key information...</p>
                                <p>Supporting details and quotes...</p>
                                <h3>About [Organization]</h3>
                                <p>Brief description of the organization...</p>
                                <p><strong>Contact:</strong><br>
                                [Name]<br>
                                [Title]<br>
                                [Phone]<br>
                                [Email]</p>
                            `,
                        },
                    ],
                    style_formats: [
                        {
                            title: "Headings",
                            items: [
                                { title: "Heading 1", format: "h1" },
                                { title: "Heading 2", format: "h2" },
                                { title: "Heading 3", format: "h3" },
                                { title: "Heading 4", format: "h4" },
                                { title: "Heading 5", format: "h5" },
                                { title: "Heading 6", format: "h6" },
                            ],
                        },
                        {
                            title: "Inline",
                            items: [
                                { title: "Bold", format: "bold" },
                                { title: "Italic", format: "italic" },
                                { title: "Underline", format: "underline" },
                                {
                                    title: "Strikethrough",
                                    format: "strikethrough",
                                },
                                { title: "Superscript", format: "superscript" },
                                { title: "Subscript", format: "subscript" },
                                { title: "Code", format: "code" },
                            ],
                        },
                        {
                            title: "Blocks",
                            items: [
                                { title: "Paragraph", format: "p" },
                                { title: "Blockquote", format: "blockquote" },
                                { title: "Div", format: "div" },
                                { title: "Pre", format: "pre" },
                            ],
                        },
                        {
                            title: "Alignment",
                            items: [
                                { title: "Left", format: "alignleft" },
                                { title: "Center", format: "aligncenter" },
                                { title: "Right", format: "alignright" },
                                { title: "Justify", format: "alignjustify" },
                            ],
                        },
                    ],
                    contextmenu: "link image table",
                    skin: "oxide",
                    content_css: "default",
                    directionality: "ltr",
                    language: "en",
                    browser_spellcheck: true,
                    convert_urls: false,
                    relative_urls: false,
                    remove_script_host: false,
                }}
            />
        </div>
    );
}
