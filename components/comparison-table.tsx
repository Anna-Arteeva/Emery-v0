"use client"

import { useLanguage } from "./language-provider"
import { translations } from "@/lib/i18n"
import { Calendar, Clock, FileText, MessageCircle, Star, SmilePlus, Coins } from "lucide-react"
import Image from "next/image"
import { CoinIcon } from "./coin-icon"

export function ComparisonTable() {
  const { language } = useLanguage()
  const t = translations[language]

  // Feature icons mapping
  const featureIcons = {
    Price: <Coins className="w-6 h-6 text-gray-700" />,
    Availability: <Calendar className="w-6 h-6 text-gray-700" />,
    "Session length": <Clock className="w-6 h-6 text-gray-700" />,
    "Talk about any topic": <MessageCircle className="w-6 h-6 text-gray-700" />,
    "Real-time feedback": <Star className="w-6 h-6 text-gray-700" />,
    "Lesson summary": <FileText className="w-6 h-6 text-gray-700" />,
    "Pressure-free": <SmilePlus className="w-6 h-6 text-gray-700" />,
    Цена: <Coins className="w-6 h-6 text-gray-700" />,
    Доступность: <Calendar className="w-6 h-6 text-gray-700" />,
    "Длительность занятия": <Clock className="w-6 h-6 text-gray-700" />,
    "Разговор на любую тему": <MessageCircle className="w-6 h-6 text-gray-700" />,
    "Обратная связь в реальном времени": <Star className="w-6 h-6 text-gray-700" />,
    "Резюме урока": <FileText className="w-6 h-6 text-gray-700" />,
    "Без давления": <SmilePlus className="w-6 h-6 text-gray-700" />,
    Preis: <Coins className="w-6 h-6 text-gray-700" />,
    Verfügbarkeit: <Calendar className="w-6 h-6 text-gray-700" />,
    Sitzungsdauer: <Clock className="w-6 h-6 text-gray-700" />,
    "Über jedes Thema sprechen": <MessageCircle className="w-6 h-6 text-gray-700" />,
    "Echtzeit-Feedback": <Star className="w-6 h-6 text-gray-700" />,
    Unterrichtszusammenfassung: <FileText className="w-6 h-6 text-gray-700" />,
    Druckfrei: <SmilePlus className="w-6 h-6 text-gray-700" />,
    Prix: <Coins className="w-6 h-6 text-gray-700" />,
    Disponibilité: <Calendar className="w-6 h-6 text-gray-700" />,
    "Durée de session": <Clock className="w-6 h-6 text-gray-700" />,
    "Parler de n'importe quel sujet": <MessageCircle className="w-6 h-6 text-gray-700" />,
    "Retours en temps réel": <Star className="w-6 h-6 text-gray-700" />,
    "Résumé de leçon": <FileText className="w-6 h-6 text-gray-700" />,
    "Sans pression": <SmilePlus className="w-6 h-6 text-gray-700" />,
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.comparison.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.comparison.subtitle}</p>
        </div>

        {/* Mobile comparison cards - visible on small screens */}
        <div className="md:hidden space-y-8">
          {/* Emery Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 flex justify-center">
              <div className="w-16 h-16 flex items-center justify-center">
                <Image src="/emery-logo.svg" alt="Emery" width={40} height={40} className="h-10 w-auto" />
              </div>
            </div>
            <div className="px-6 pb-6 space-y-4">
              {t.comparison.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="text-blue-500">
                    {feature.emeryValue ? (
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M13.3334 4L6.00002 11.3333L2.66669 8"
                            stroke="#4285F4"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"
                            stroke="#9CA3AF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{feature.name}</p>
                    <p className="text-sm text-blue-600">{feature.emeryDescription}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Traditional Teacher Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 flex justify-center">
              <div className="w-16 h-16 flex items-center justify-center">
                <span className="text-gray-800 font-bold">Teacher</span>
              </div>
            </div>
            <div className="px-6 pb-6 space-y-4">
              {t.comparison.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div>
                    {feature.teacherValue ? (
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M13.3334 4L6.00002 11.3333L2.66669 8"
                            stroke="#4285F4"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"
                            stroke="#9CA3AF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{feature.name}</p>
                    <p className="text-sm text-gray-600">{feature.teacherDescription}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other App Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 flex justify-center">
              <div className="w-16 h-16 flex items-center justify-center">
                <span className="text-gray-800 font-bold">Other App</span>
              </div>
            </div>
            <div className="px-6 pb-6 space-y-4">
              {t.comparison.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div>
                    {feature.otherAppValue ? (
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M13.3334 4L6.00002 11.3333L2.66669 8"
                            stroke="#4285F4"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"
                            stroke="#9CA3AF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{feature.name}</p>
                    <p className="text-sm text-gray-600">{feature.otherAppDescription}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop comparison table - hidden on small screens */}
        <div className="hidden md:block max-w-5xl mx-auto">
          {/* Table headers with logos */}
          <div className="grid grid-cols-4 mb-8">
            <div className="col-span-1"></div>
            <div className="col-span-1 flex justify-center">
              <div className="w-20 h-20 flex items-center justify-center">
                <Image src="/emery-logo.svg" alt="Emery" width={50} height={50} className="h-12 w-auto" />
              </div>
            </div>
            <div className="col-span-1 flex justify-center text-center">
              <div className="w-20 h-20 flex flex-col items-center justify-center">
                <span className="text-gray-800 font-bold text-lg">
                  English
                  <br />
                  Teacher
                </span>
              </div>
            </div>
            <div className="col-span-1 flex justify-center text-center">
              <div className="w-20 h-20 flex flex-col items-center justify-center">
                <span className="text-gray-800 font-bold text-lg">
                  Other
                  <br />
                  Apps
                </span>
              </div>
            </div>
          </div>

          {/* Table rows */}
          {t.comparison.features.map((feature, index) => (
            <div
              key={index}
              className={`grid grid-cols-4 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} rounded-xl mb-2 py-6 px-8`}
            >
              <div className="col-span-1 flex items-center gap-4">
                <div className="flex-shrink-0">
                  {featureIcons[feature.name] || <Star className="w-6 h-6 text-gray-700" />}
                </div>
                <span className="font-medium text-gray-900">{feature.name}</span>
              </div>

              <div className="col-span-1 flex justify-center">
                {feature.name === "Price" ||
                feature.name === "Preis" ||
                feature.name === "Цена" ||
                feature.name === "Prix" ? (
                  feature.emeryValue === "🪙🪙" ? (
                    <CoinIcon count={2} />
                  ) : feature.emeryValue === "🪙" ? (
                    <CoinIcon count={1} />
                  ) : (
                    <span className="text-blue-600 font-medium">{feature.emeryValue}</span>
                  )
                ) : typeof feature.emeryValue === "string" ? (
                  <span className="text-blue-600 font-medium">{feature.emeryValue}</span>
                ) : feature.emeryValue ? (
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16.6667 5L7.50002 14.1667L3.33335 10"
                        stroke="#4285F4"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.5 4.5L4.5 13.5M4.5 4.5L13.5 13.5"
                        stroke="#9CA3AF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>

              <div className="col-span-1 flex justify-center">
                {feature.name === "Price" ||
                feature.name === "Preis" ||
                feature.name === "Цена" ||
                feature.name === "Prix" ? (
                  feature.teacherValue === "🪙🪙🪙🪙" ? (
                    <CoinIcon count={4} />
                  ) : feature.teacherValue === "🪙🪙" ? (
                    <CoinIcon count={2} />
                  ) : feature.teacherValue === "🪙" ? (
                    <CoinIcon count={1} />
                  ) : (
                    <span className="text-gray-700 font-medium">{feature.teacherValue}</span>
                  )
                ) : typeof feature.teacherValue === "string" ? (
                  <span className="text-gray-700 font-medium">{feature.teacherValue}</span>
                ) : feature.teacherValue ? (
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16.6667 5L7.50002 14.1667L3.33335 10"
                        stroke="#4285F4"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.5 4.5L4.5 13.5M4.5 4.5L13.5 13.5"
                        stroke="#9CA3AF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>

              <div className="col-span-1 flex justify-center">
                {feature.name === "Price" ||
                feature.name === "Preis" ||
                feature.name === "Цена" ||
                feature.name === "Prix" ? (
                  feature.otherAppValue === "🪙🪙" ? (
                    <CoinIcon count={2} />
                  ) : feature.otherAppValue === "🪙" ? (
                    <CoinIcon count={1} />
                  ) : (
                    <span className="text-gray-700 font-medium">{feature.otherAppValue}</span>
                  )
                ) : typeof feature.otherAppValue === "string" ? (
                  <span className="text-gray-700 font-medium">{feature.otherAppValue}</span>
                ) : feature.otherAppValue ? (
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16.6667 5L7.50002 14.1667L3.33335 10"
                        stroke="#4285F4"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.5 4.5L4.5 13.5M4.5 4.5L13.5 13.5"
                        stroke="#9CA3AF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
