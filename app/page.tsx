"use client";

import { useState } from "react";
import { MessageSquare, Download, Copy, Check } from "lucide-react";

interface FormData {
  businessName: string;
  productOfferings: string;
  uniqueSellingPoints: string;
  targetCountry: string;
  specificProducts: string;
  certifications: string;
  experience: string;
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    businessName: "",
    productOfferings: "",
    uniqueSellingPoints: "",
    targetCountry: "",
    specificProducts: "",
    certifications: "",
    experience: "",
  });

  const [generatedContent, setGeneratedContent] = useState<any>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generateContent = () => {
    const content = {
      introduction: `Hello! I am ${formData.businessName || "[Your Business Name]"}, a ${
        formData.experience || "professional"
      } spice exporter based in [Your Country]. We specialize in ${
        formData.specificProducts || "premium quality spices"
      }.\n\n${
        formData.uniqueSellingPoints || "We offer competitive pricing and reliable delivery"
      }. ${
        formData.certifications
          ? `We hold ${formData.certifications} certifications.`
          : ""
      }\n\nI came across your business and believe our products could be valuable for your market. Would you be interested in exploring a potential partnership?`,

      followUp: `Thank you for your response! I'd be happy to provide more details about our ${
        formData.specificProducts || "spice products"
      }.\n\nKey highlights:\n• Product Range: ${
        formData.productOfferings || "Various premium spices"
      }\n• Quality Standards: ${
        formData.certifications || "International quality standards"
      }\n• Minimum Order: [Specify quantity]\n• Delivery Time: [Specify timeline]\n\nCould we schedule a brief call to discuss your specific requirements?`,

      samples: `I'm pleased you're interested! We'd be happy to send samples of our ${
        formData.specificProducts || "products"
      }.\n\nTo arrange this, I'll need:\n• Delivery address\n• Preferred sample quantities\n• Any specific product grades you'd like to test\n\nSample shipment typically takes [X] days to ${
        formData.targetCountry || "your location"
      }. Shall I proceed with the arrangements?`,

      pricing: `Thank you for your interest in our pricing structure.\n\nFor ${
        formData.specificProducts || "our products"
      }:\n• FOB Price: [Price per kg/ton]\n• CIF Price to ${
        formData.targetCountry || "your port"
      }: [Price]\n• Payment Terms: [Terms]\n• Minimum Order Quantity: [MOQ]\n\nPrices are competitive and negotiable based on order volume. Would you like a formal quotation?`,

      negotiation: `I appreciate your feedback on the pricing. As we value building long-term partnerships, I'm open to discussing terms that work for both parties.\n\nCould you share:\n• Your target price point?\n• Expected order quantity?\n• Frequency of orders?\n\nThis will help me propose the best possible offer for ${
        formData.targetCountry || "your market"
      }.`,

      closing: `I'm excited about the possibility of working together! To finalize our agreement:\n\n1. I'll prepare a formal contract\n2. Share our complete product specifications\n3. Arrange payment and shipping details\n4. Provide shipment tracking information\n\nOur goal is to build a reliable, long-term business relationship with partners in ${
        formData.targetCountry || "your region"
      }. When would you like to proceed with the first order?`,

      culturalTips: generateCulturalTips(formData.targetCountry),
      stepByStepGuide: generateStepByStepGuide(formData),
    };

    setGeneratedContent(content);
  };

  const generateCulturalTips = (country: string) => {
    const countryLower = country.toLowerCase();
    let tips = [
      "Research business hours and holidays in the target country",
      "Use professional and respectful language",
      "Be patient - building trust takes time in international trade",
      "Respond promptly to messages (within 24 hours ideally)",
    ];

    if (
      countryLower.includes("middle east") ||
      countryLower.includes("arab") ||
      countryLower.includes("uae") ||
      countryLower.includes("saudi")
    ) {
      tips = [
        "Avoid contacting during prayer times (5 times daily)",
        "Friday is a holy day - avoid business communications",
        "Use formal greetings like 'As-salamu alaykum'",
        "Build personal relationships before diving into business",
        "Avoid overly direct negotiation - maintain diplomacy",
        ...tips,
      ];
    } else if (
      countryLower.includes("china") ||
      countryLower.includes("japan") ||
      countryLower.includes("korea") ||
      countryLower.includes("asia")
    ) {
      tips = [
        "Respect hierarchy - address senior members formally",
        "Avoid being too direct - use polite, indirect language",
        "Share certifications and quality documents proactively",
        "Chinese New Year and other festivals are important - plan around them",
        "Be prepared for detailed negotiation processes",
        ...tips,
      ];
    } else if (
      countryLower.includes("europe") ||
      countryLower.includes("germany") ||
      countryLower.includes("uk") ||
      countryLower.includes("france")
    ) {
      tips = [
        "Europeans value punctuality and professionalism",
        "Provide detailed product specifications and certifications",
        "Be transparent about pricing and terms",
        "Sustainability and organic certifications are highly valued",
        "Follow up consistently but not excessively",
        ...tips,
      ];
    } else if (
      countryLower.includes("america") ||
      countryLower.includes("usa") ||
      countryLower.includes("canada")
    ) {
      tips = [
        "Be direct and clear in communication",
        "Emphasize quality, safety certifications (FDA, USDA)",
        "Provide detailed documentation and compliance info",
        "Americans value efficiency - get to the point quickly",
        "Highlight competitive advantages and unique value",
        ...tips,
      ];
    }

    return tips;
  };

  const generateStepByStepGuide = (data: FormData) => {
    return [
      {
        step: 1,
        title: "Research & Identify Potential Buyers",
        description: `Research importers, distributors, and retailers in ${
          data.targetCountry || "your target market"
        } who deal with ${data.specificProducts || "spices"}. Use platforms like:`,
        actions: [
          "LinkedIn - Search for spice importers/buyers",
          "Trade directories (Alibaba, TradeIndia, GlobalSources)",
          "Industry associations and trade shows",
          "Google search for '[country] spice importers'",
        ],
      },
      {
        step: 2,
        title: "Prepare Your Introduction",
        description:
          "Craft a professional, concise message that highlights your value proposition.",
        actions: [
          "Include business name and brief background",
          "Mention specific products and their quality",
          "Highlight certifications and unique selling points",
          "Keep it under 150 words for the first message",
        ],
      },
      {
        step: 3,
        title: "Make Initial Contact",
        description: "Send your introduction message via WhatsApp Business.",
        actions: [
          "Use WhatsApp Business for professional credibility",
          "Send message during business hours (9 AM - 6 PM their time)",
          "Include your business profile with logo and description",
          "Don't send files or links in the first message",
        ],
      },
      {
        step: 4,
        title: "Follow Up Strategically",
        description: "If no response within 3-4 days, send a polite follow-up.",
        actions: [
          "Reference your previous message",
          "Add new information (new product, special offer)",
          "Keep it brief and non-pushy",
          "Maximum 2 follow-ups before moving on",
        ],
      },
      {
        step: 5,
        title: "Engage in Conversation",
        description: "Once they respond, focus on understanding their needs.",
        actions: [
          "Ask about their current suppliers and products",
          "Inquire about order quantities and frequency",
          "Discuss quality standards and certifications they require",
          "Be responsive and professional in all interactions",
        ],
      },
      {
        step: 6,
        title: "Share Samples & Documentation",
        description: "Provide product samples and necessary documentation.",
        actions: [
          "Send high-quality product photos",
          "Share certifications (organic, ISO, HACCP, etc.)",
          "Provide product specifications and test reports",
          "Arrange physical samples if they're interested",
        ],
      },
      {
        step: 7,
        title: "Negotiate Terms",
        description: "Discuss pricing, payment, and delivery terms.",
        actions: [
          "Provide FOB/CIF pricing based on their preference",
          "Discuss payment terms (L/C, T/T, etc.)",
          "Clarify minimum order quantities",
          "Be flexible but protect your margins",
        ],
      },
      {
        step: 8,
        title: "Close the Deal",
        description: "Finalize the agreement and prepare for shipment.",
        actions: [
          "Send formal quotation/proforma invoice",
          "Draft and sign contract or purchase agreement",
          "Arrange logistics and shipping",
          "Provide tracking information and stay in touch",
        ],
      },
      {
        step: 9,
        title: "Maintain the Relationship",
        description: "Build long-term partnership for repeat business.",
        actions: [
          "Follow up after delivery to ensure satisfaction",
          "Send seasonal greetings and updates",
          "Inform about new products or special offers",
          "Request feedback and testimonials",
        ],
      },
    ];
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const downloadGuide = () => {
    if (!generatedContent) return;

    let guideText = `INTERNATIONAL SPICE TRADE WHATSAPP GUIDE\n`;
    guideText += `Generated for: ${formData.businessName || "Your Business"}\n`;
    guideText += `Target Market: ${formData.targetCountry || "International"}\n`;
    guideText += `Products: ${formData.specificProducts || "Spices"}\n`;
    guideText += `\n${"=".repeat(60)}\n\n`;

    guideText += `STEP-BY-STEP GUIDE\n\n`;
    generatedContent.stepByStepGuide.forEach((item: any) => {
      guideText += `STEP ${item.step}: ${item.title}\n`;
      guideText += `${item.description}\n\n`;
      item.actions.forEach((action: string) => {
        guideText += `  • ${action}\n`;
      });
      guideText += `\n`;
    });

    guideText += `\n${"=".repeat(60)}\n\n`;
    guideText += `MESSAGE TEMPLATES\n\n`;

    guideText += `1. INITIAL INTRODUCTION\n${generatedContent.introduction}\n\n`;
    guideText += `2. FOLLOW-UP MESSAGE\n${generatedContent.followUp}\n\n`;
    guideText += `3. SAMPLE REQUEST RESPONSE\n${generatedContent.samples}\n\n`;
    guideText += `4. PRICING DISCUSSION\n${generatedContent.pricing}\n\n`;
    guideText += `5. NEGOTIATION MESSAGE\n${generatedContent.negotiation}\n\n`;
    guideText += `6. CLOSING MESSAGE\n${generatedContent.closing}\n\n`;

    guideText += `\n${"=".repeat(60)}\n\n`;
    guideText += `CULTURAL TIPS FOR ${formData.targetCountry || "YOUR TARGET MARKET"}\n\n`;
    generatedContent.culturalTips.forEach((tip: string) => {
      guideText += `• ${tip}\n`;
    });

    guideText += `\n${"=".repeat(60)}\n`;
    guideText += `\nGenerated by International Spice Trade Assistant\n`;

    const blob = new Blob([guideText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `spice-trade-whatsapp-guide-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <MessageSquare className="w-16 h-16 text-orange-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            International Spice Trade Assistant
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Professional guide for connecting with foreign buyers via WhatsApp
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Your Business Information
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Business Name
              </label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                placeholder="e.g., Spice Excellence Trading Co."
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Target Country/Region
              </label>
              <input
                type="text"
                name="targetCountry"
                value={formData.targetCountry}
                onChange={handleInputChange}
                placeholder="e.g., United Arab Emirates, USA, Europe"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Specific Products
              </label>
              <input
                type="text"
                name="specificProducts"
                value={formData.specificProducts}
                onChange={handleInputChange}
                placeholder="e.g., organic turmeric, black pepper, cardamom"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your Experience
              </label>
              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                placeholder="e.g., 10+ years in spice export"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Product Offerings
              </label>
              <textarea
                name="productOfferings"
                value={formData.productOfferings}
                onChange={handleInputChange}
                placeholder="e.g., Premium grade turmeric (curcumin 3-5%), whole black pepper, green cardamom"
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Unique Selling Points
              </label>
              <textarea
                name="uniqueSellingPoints"
                value={formData.uniqueSellingPoints}
                onChange={handleInputChange}
                placeholder="e.g., Direct sourcing from farmers, competitive pricing, fast delivery"
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Certifications
              </label>
              <input
                type="text"
                name="certifications"
                value={formData.certifications}
                onChange={handleInputChange}
                placeholder="e.g., ISO 22000, HACCP, Organic, FSSAI"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>

          <button
            onClick={generateContent}
            className="mt-8 w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Generate WhatsApp Guide & Messages
          </button>
        </div>

        {generatedContent && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Your Customized Guide
                </h2>
                <button
                  onClick={downloadGuide}
                  className="flex items-center gap-2 bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-200"
                >
                  <Download className="w-5 h-5" />
                  Download Full Guide
                </button>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Step-by-Step Process
                </h3>
                <div className="space-y-6">
                  {generatedContent.stepByStepGuide.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="border-l-4 border-orange-500 pl-6 py-2"
                    >
                      <div className="flex items-start gap-3">
                        <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                          {item.step}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 mb-3">
                            {item.description}
                          </p>
                          <ul className="space-y-2">
                            {item.actions.map((action: string, i: number) => (
                              <li
                                key={i}
                                className="text-sm text-gray-700 dark:text-gray-400 flex items-start gap-2"
                              >
                                <span className="text-orange-500 mt-1">•</span>
                                <span>{action}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  WhatsApp Message Templates
                </h3>
                <div className="space-y-4">
                  {[
                    { title: "Initial Introduction", content: generatedContent.introduction },
                    { title: "Follow-Up Message", content: generatedContent.followUp },
                    { title: "Sample Request Response", content: generatedContent.samples },
                    { title: "Pricing Discussion", content: generatedContent.pricing },
                    { title: "Negotiation Message", content: generatedContent.negotiation },
                    { title: "Closing Message", content: generatedContent.closing },
                  ].map((template, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {template.title}
                        </h4>
                        <button
                          onClick={() => copyToClipboard(template.content, index)}
                          className="flex items-center gap-2 text-sm bg-orange-500 text-white py-1 px-3 rounded hover:bg-orange-600 transition-all duration-200"
                        >
                          {copiedIndex === index ? (
                            <>
                              <Check className="w-4 h-4" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              Copy
                            </>
                          )}
                        </button>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line text-sm">
                        {template.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Cultural Tips for {formData.targetCountry || "Your Target Market"}
                </h3>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                  <ul className="space-y-3">
                    {generatedContent.culturalTips.map((tip: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-blue-600 dark:text-blue-400 text-xl">
                          ✓
                        </span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Best Practices Summary</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-lg">✓ DO:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Use WhatsApp Business for credibility</li>
                    <li>• Research buyer background before contacting</li>
                    <li>• Respond within 24 hours</li>
                    <li>• Provide detailed product information</li>
                    <li>• Be professional and respectful</li>
                    <li>• Follow up strategically (not too often)</li>
                    <li>• Build long-term relationships</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">✗ DON'T:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Send unsolicited files or links initially</li>
                    <li>• Be overly pushy or aggressive</li>
                    <li>• Contact during off-hours or holidays</li>
                    <li>• Make unrealistic promises</li>
                    <li>• Ignore cultural differences</li>
                    <li>• Follow up more than twice without response</li>
                    <li>• Rush the relationship-building process</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
