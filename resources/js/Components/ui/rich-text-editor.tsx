import React, { useMemo, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

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
    const quillRef = useRef<ReactQuill>(null);

    // Custom image handler for uploading images
    const imageHandler = () => {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();

        input.onchange = async () => {
            const file = input.files?.[0];
            if (file) {
                const formData = new FormData();
                formData.append("image", file);

                try {
                    const response = await fetch(route("admin.blogs.upload-image"), {
                        method: "POST",
                        body: formData,
                        headers: {
                            "X-CSRF-TOKEN":
                                document
                                    .querySelector('meta[name="csrf-token"]')
                                    ?.getAttribute("content") || "",
                        },
                    });

                    const result = await response.json();
                    
                    if (result.success) {
                        const quill = quillRef.current?.getEditor();
                        if (quill) {
                            const range = quill.getSelection();
                            quill.insertEmbed(range?.index || 0, "image", result.url);
                        }
                    } else {
                        alert("Image upload failed: " + (result.message || "Unknown error"));
                    }
                } catch (error) {
                    console.error("Upload error:", error);
                    alert("Image upload failed. Please try again.");
                }
            }
        };
    };

    // Quill modules configuration
    const modules = useMemo(
        () => ({
            toolbar: {
                container: [
                    [{ header: [1, 2, 3, 4, 5, 6, false] }],
                    [{ font: [] }],
                    [{ size: ["small", false, "large", "huge"] }],
                    ["bold", "italic", "underline", "strike"],
                    [{ color: [] }, { background: [] }],
                    [{ script: "sub" }, { script: "super" }],
                    ["blockquote", "code-block"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    [{ indent: "-1" }, { indent: "+1" }],
                    [{ direction: "rtl" }],
                    [{ align: [] }],
                    ["link", "image", "video"],
                    ["clean"],
                ],
                handlers: {
                    image: imageHandler,
                },
            },
            clipboard: {
                matchVisual: false,
            },
        }),
        []
    );

    // Quill formats
    const formats = [
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "color",
        "background",
        "script",
        "blockquote",
        "code-block",
        "list",
        "bullet",
        "indent",
        "direction",
        "align",
        "link",
        "image",
        "video",
    ];

    return (
        <div className="rich-text-editor" style={{ '--editor-height': `${height}px` } as React.CSSProperties}>
            <style dangerouslySetInnerHTML={{
                __html: `
                    .rich-text-editor .ql-editor {
                        min-height: ${height}px;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                        font-size: 14px;
                        line-height: 1.6;
                        color: #374151;
                    }
                    
                    .rich-text-editor .ql-editor.ql-blank::before {
                        color: #9ca3af;
                        font-style: normal;
                    }
                    
                    .rich-text-editor .ql-toolbar {
                        border-top: 1px solid #e5e7eb;
                        border-left: 1px solid #e5e7eb;
                        border-right: 1px solid #e5e7eb;
                        border-bottom: none;
                        border-radius: 0.375rem 0.375rem 0 0;
                    }
                    
                    .rich-text-editor .ql-container {
                        border-bottom: 1px solid #e5e7eb;
                        border-left: 1px solid #e5e7eb;
                        border-right: 1px solid #e5e7eb;
                        border-top: none;
                        border-radius: 0 0 0.375rem 0.375rem;
                    }
                    
                    .rich-text-editor .ql-editor img {
                        max-width: 100%;
                        height: auto;
                    }
                    
                    .rich-text-editor .ql-editor blockquote {
                        border-left: 4px solid #e5e7eb;
                        margin: 1.5em 0;
                        padding-left: 1em;
                        color: #6b7280;
                    }
                    
                    .rich-text-editor .ql-editor code {
                        background-color: #f3f4f6;
                        padding: 2px 4px;
                        border-radius: 3px;
                        font-family: 'Monaco', 'Consolas', monospace;
                    }
                    
                    .rich-text-editor .ql-editor pre {
                        background-color: #1f2937;
                        color: #f9fafb;
                        padding: 1em;
                        border-radius: 6px;
                        overflow-x: auto;
                    }
                    
                    .rich-text-editor .ql-editor h1,
                    .rich-text-editor .ql-editor h2,
                    .rich-text-editor .ql-editor h3,
                    .rich-text-editor .ql-editor h4,
                    .rich-text-editor .ql-editor h5,
                    .rich-text-editor .ql-editor h6 {
                        margin-top: 1.5em;
                        margin-bottom: 0.5em;
                        font-weight: 600;
                    }
                    
                    .rich-text-editor .ql-editor ul,
                    .rich-text-editor .ql-editor ol {
                        margin: 1em 0;
                        padding-left: 2em;
                    }
                    
                    .rich-text-editor .ql-editor li {
                        margin: 0.25em 0;
                    }
                `
            }} />
            <ReactQuill
                ref={quillRef}
                theme="snow"
                value={value}
                onChange={onChange}
                modules={modules}
                formats={formats}
                placeholder={placeholder}
                readOnly={disabled}
            />
        </div>
    );
}
