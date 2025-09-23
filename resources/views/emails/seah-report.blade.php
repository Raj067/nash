<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SEAH Report - {{ $report_id }}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
        }
        .header {
            background: linear-gradient(135deg, #1e40af, #dc2626);
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }
        .content {
            background: white;
            padding: 30px;
            border-radius: 0 0 8px 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .alert {
            background-color: #fef2f2;
            border: 1px solid #fecaca;
            color: #991b1b;
            padding: 15px;
            border-radius: 6px;
            margin-bottom: 20px;
            font-weight: bold;
        }
        .section {
            margin-bottom: 25px;
            padding-bottom: 20px;
            border-bottom: 1px solid #e5e7eb;
        }
        .section:last-child {
            border-bottom: none;
        }
        .section-title {
            color: #1e40af;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
        }
        .section-title::before {
            content: "▶";
            margin-right: 8px;
            color: #dc2626;
        }
        .field {
            margin-bottom: 12px;
        }
        .field-label {
            font-weight: bold;
            color: #374151;
            display: inline-block;
            width: 180px;
            vertical-align: top;
        }
        .field-value {
            color: #6b7280;
            display: inline-block;
            width: calc(100% - 190px);
            word-wrap: break-word;
        }
        .description-box {
            background-color: #f8fafc;
            border: 1px solid #e2e8f0;
            padding: 15px;
            border-radius: 6px;
            margin-top: 10px;
            white-space: pre-wrap;
        }
        .incident-type {
            background-color: #fef2f2;
            color: #991b1b;
            padding: 8px 12px;
            border-radius: 20px;
            font-weight: bold;
            display: inline-block;
            margin-bottom: 10px;
        }
        .anonymous-badge {
            background-color: #f3f4f6;
            color: #374151;
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: bold;
        }
        .consent-item {
            background-color: #f0fdf4;
            border: 1px solid #bbf7d0;
            color: #166534;
            padding: 8px 12px;
            border-radius: 6px;
            margin: 5px 0;
            display: inline-block;
        }
        .consent-item.no {
            background-color: #fef2f2;
            border-color: #fecaca;
            color: #991b1b;
        }
        .attachments {
            background-color: #f8fafc;
            border: 1px solid #e2e8f0;
            padding: 15px;
            border-radius: 6px;
        }
        .attachment-item {
            display: flex;
            align-items: center;
            padding: 8px 0;
            border-bottom: 1px solid #e5e7eb;
        }
        .attachment-item:last-child {
            border-bottom: none;
        }
        .footer {
            margin-top: 30px;
            padding: 20px;
            background-color: #1f2937;
            color: white;
            text-align: center;
            border-radius: 8px;
        }
        .footer a {
            color: #60a5fa;
            text-decoration: none;
        }
        .priority-notice {
            background: linear-gradient(135deg, #dc2626, #991b1b);
            color: white;
            padding: 15px;
            border-radius: 6px;
            margin-bottom: 20px;
            text-align: center;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>🛡️ SEAH Report Received</h1>
        <p>Report ID: <strong>{{ $report_id }}</strong></p>
        <p>Submitted: {{ $submitted_at }}</p>
    </div>

    <div class="content">
        <div class="priority-notice">
            ⚠️ URGENT: This is a Sexual Exploitation, Abuse, and Harassment (SEAH) report requiring immediate attention
        </div>

        <div class="alert">
            🔒 CONFIDENTIAL: This report contains sensitive information and must be handled according to NASHCOP's SEAH policy and procedures.
        </div>

        <!-- Report Overview -->
        <div class="section">
            <div class="section-title">Report Overview</div>
            <div class="field">
                <span class="field-label">Report Type:</span>
                <span class="field-value">{{ strtoupper($report_type) }}</span>
            </div>
            <div class="field">
                <span class="field-label">Incident Type:</span>
                <span class="incident-type">{{ ucfirst(str_replace('_', ' ', $incident_type)) }}</span>
            </div>
            <div class="field">
                <span class="field-label">Reporter Status:</span>
                <span class="field-value">
                    @if($is_anonymous)
                        <span class="anonymous-badge">Anonymous Report</span>
                    @else
                        Identified Report
                    @endif
                </span>
            </div>
        </div>

        <!-- Incident Details -->
        <div class="section">
            <div class="section-title">Incident Details</div>
            <div class="field">
                <span class="field-label">Date of Incident:</span>
                <span class="field-value">{{ $incident_date ? date('F d, Y', strtotime($incident_date)) : 'Not specified' }}</span>
            </div>
            <div class="field">
                <span class="field-label">Location:</span>
                <span class="field-value">{{ $incident_location ?: 'Not specified' }}</span>
            </div>
            <div class="field">
                <span class="field-label">Description:</span>
                <div class="description-box">{{ $description }}</div>
            </div>
            @if($persons_involved)
            <div class="field">
                <span class="field-label">Persons Involved:</span>
                <div class="description-box">{{ $persons_involved }}</div>
            </div>
            @endif
            @if($witnesses)
            <div class="field">
                <span class="field-label">Witnesses:</span>
                <div class="description-box">{{ $witnesses }}</div>
            </div>
            @endif
            @if($previous_reports)
            <div class="field">
                <span class="field-label">Previous Reports:</span>
                <div class="description-box">{{ $previous_reports }}</div>
            </div>
            @endif
        </div>

        <!-- Reporter Information -->
        <div class="section">
            <div class="section-title">Reporter Information</div>
            <div class="field">
                <span class="field-label">Name:</span>
                <span class="field-value">{{ $reporter_name }}</span>
            </div>
            <div class="field">
                <span class="field-label">Email:</span>
                <span class="field-value">{{ $reporter_email }}</span>
            </div>
            <div class="field">
                <span class="field-label">Phone:</span>
                <span class="field-value">{{ $reporter_phone ?: 'Not provided' }}</span>
            </div>
            <div class="field">
                <span class="field-label">Relationship to Incident:</span>
                <span class="field-value">{{ $reporter_relationship ?: 'Not specified' }}</span>
            </div>
        </div>

        <!-- Consent and Follow-up -->
        <div class="section">
            <div class="section-title">Consent and Follow-up</div>
            <div class="field">
                <span class="field-label">Investigation Consent:</span>
                <span class="consent-item {{ $consent_investigation ? '' : 'no' }}">
                    {{ $consent_investigation ? '✅ Consents to investigation' : '❌ Does not consent to investigation' }}
                </span>
            </div>
            @if(!$is_anonymous)
            <div class="field">
                <span class="field-label">Contact Consent:</span>
                <span class="consent-item {{ $consent_contact ? '' : 'no' }}">
                    {{ $consent_contact ? '✅ Consents to being contacted' : '❌ Does not consent to being contacted' }}
                </span>
            </div>
            @endif
            @if($additional_support)
            <div class="field">
                <span class="field-label">Additional Support Needed:</span>
                <div class="description-box">{{ $additional_support }}</div>
            </div>
            @endif
        </div>

        <!-- Attachments -->
        @if(count($attachments) > 0)
        <div class="section">
            <div class="section-title">Attachments ({{ count($attachments) }} files)</div>
            <div class="attachments">
                @foreach($attachments as $attachment)
                <div class="attachment-item">
                    <span>📎 {{ $attachment['original_name'] }}</span>
                    <span style="margin-left: auto; color: #6b7280; font-size: 12px;">
                        {{ round($attachment['size'] / 1024, 1) }} KB
                    </span>
                </div>
                @endforeach
            </div>
        </div>
        @endif

        <!-- Next Steps -->
        <div class="section">
            <div class="section-title">Required Actions</div>
            <div style="background-color: #fef3c7; border: 1px solid #f59e0b; padding: 15px; border-radius: 6px;">
                <h4 style="margin-top: 0; color: #92400e;">Immediate Actions Required:</h4>
                <ul style="color: #92400e; margin-bottom: 0;">
                    <li><strong>Acknowledge receipt</strong> within 24 hours</li>
                    <li><strong>Assign case officer</strong> according to SEAH policy</li>
                    <li><strong>Ensure confidentiality</strong> and secure handling</li>
                    <li><strong>Follow SEAH procedures</strong> for investigation</li>
                    <li><strong>Document all actions</strong> taken</li>
                    @if(!$is_anonymous && $consent_contact)
                    <li><strong>Contact reporter</strong> if additional information needed</li>
                    @endif
                </ul>
            </div>
        </div>
    </div>

    <div class="footer">
        <p><strong>NASHCOP - National AIDS, STIs and Hepatitis Control Programme</strong></p>
        <p>This email was generated automatically from the NASHCOP website SEAH reporting system.</p>
        <p>For urgent matters, contact: <a href="tel:117">117 (Free Hotline)</a> | <a href="mailto:nacp@afya.go.tz">nacp@afya.go.tz</a></p>
        <p style="font-size: 12px; opacity: 0.8; margin-top: 15px;">
            Report ID: {{ $report_id }} | Generated: {{ $submitted_at }}
        </p>
    </div>
</body>
</html>
