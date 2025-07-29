"use client"

import { useState } from "react"
import { Heart, Camera, Video, MessageCircle, Mail, Star } from "lucide-react"

export default function AnniversaryPage() {
  const [currentSection, setCurrentSection] = useState("home")
  const [selectedCard, setSelectedCard] = useState<number | null>(null)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<string[]>([])

  const loveCards = [
    {
      id: 1,
      title: "Nuestro Primer Encuentro",
      content:
        "Recuerdo perfectamente el día que nos conocimos. Tu sonrisa iluminó mi mundo y supe que eras especial. Desde ese momento, cada día contigo ha sido una aventura llena de amor, si señor.",
    },
    {
      id: 2,
      title: "Momentos Favoritos",
      content:
        "Cada momento contigo es especial, pero hay algunos que brillan más: nuestras tardes-noche de risas viendo Chepe y otras cosas màs JAJAJA",
    },
    {
      id: 3,
      title: "Lo Que Amo de Ti",
      content:
        "Amo tu risa contagiosa, tu forma de ver la vida, tu bondad infinita, y cómo haces que cada día sea mejor solo con estar a mi lado. Eres mi persona favorita, te amoooooo kjdfskjfjdsk",
    },
    {
      id: 4,
      title: "Nuestro Futuro",
      content:
        "Este primer año ha sido increíble, pero sé que es solo el comienzo. Quiero vivir mil aventuras más contigo, crear más recuerdos, y amarte cada día más que el anterior.",
    },
  ]

  const photos = [
    "/images/image (2).jpeg",
    "/images/image (3).jpeg",
    "/images/image (4).jpeg",
    "/images/image (5).jpeg",
    "/images/image (6).jpeg",
    "/images/image (7).jpeg",
    "/images/image (8).jpeg",
    "/images/image (9).jpeg",
    "/images/image (10).jpeg",
    "/images/image (11).jpeg",
    "/images/image (12).jpeg",
  ]

  const handleSendMessage = () => {
    if (message.trim()) {
      const phoneNumber = "573006830624"
      const encodedMessage = encodeURIComponent(message.trim())
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
      window.open(whatsappUrl, "_blank")
    }
  }

  const renderHome = () => (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-red-100 flex items-center justify-center p-4">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8 animate-pulse">
          <Heart className="w-20 h-20 text-red-500 mx-auto mb-4" />
        </div>
        <h1 className="text-6xl font-bold text-red-600 mb-4 animate-fade-in">¡Feliz Primer Año!</h1>
        <p className="text-2xl text-gray-700 mb-8 animate-fade-in-delay">Para la mujer más especial de mi vida</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <button
            onClick={() => setCurrentSection("photos")}
            className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-pink-200"
          >
            <Camera className="w-12 h-12 text-pink-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-800">Nuestras Fotos</h3>
            <p className="text-gray-600 text-sm">Recuerdos especiales</p>
          </button>

          <button
            onClick={() => setCurrentSection("video")}
            className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-pink-200"
          >
            <Video className="w-12 h-12 text-red-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-800">Video Especial</h3>
            <p className="text-gray-600 text-sm">Un mensaje para ti</p>
          </button>

          <button
            onClick={() => setCurrentSection("cards")}
            className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-pink-200"
          >
            <Mail className="w-12 h-12 text-purple-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-800">Cartas de Amor</h3>
            <p className="text-gray-600 text-sm">Mensajes del corazón</p>
          </button>

          <button
            onClick={() => setCurrentSection("messages")}
            className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-pink-200"
          >
            <MessageCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-800">Déjame un Mensaje</h3>
            <p className="text-gray-600 text-sm">Comparte tus sentimientos</p>
          </button>
        </div>
      </div>
    </div>
  )

  const renderPhotos = () => (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-red-600 mb-4">Nuestros Momentos Especiales</h2>
          <p className="text-gray-700 text-lg">Cada foto cuenta una historia de amor</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={photo || "/placeholder.svg"}
                alt={`Recuerdo ${index + 1}`}
                className="w-full h-max object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <Star className="w-6 h-6 mb-2" />
                  <p className="text-sm font-medium">Momento Especial {index + 1}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => setCurrentSection("home")}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300"
          >
            Volver al Inicio
          </button>
        </div>
      </div>
    </div>
  )

  const renderVideo = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 p-8 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-600 mb-8">Un Video Especial Para Ti</h2>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
          <div className="aspect-video bg-gray-200 rounded-xl mb-6 overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/NoWqnjmh8KU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">"Para la mujer màs bella"</h3>
            <p className="text-gray-600 mb-6">
              Te dedico esta canciòn con todo mi amor. Cada nota, cada palabra, es un reflejo de lo que siento por ti. Espero que disfrutes este momento y entiendas la letra de la canciòn, porque cada palabra es una declaración de amor hacia ti.
            </p>
          </div>
        </div>

        <button
          onClick={() => setCurrentSection("home")}
          className="mt-8 bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300"
        >
          Volver al Inicio
        </button>
      </div>
    </div>
  );

  const renderCards = () => (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 to-pink-200 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-rose-600 mb-4">Cartas de Amor</h2>
          <p className="text-gray-700 text-lg">Haz click en cada carta para leer mi mensaje</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {loveCards.map((card) => (
            <div key={card.id} className="relative">
              <div
                className={`bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg cursor-pointer transform transition-all duration-500 hover:shadow-2xl ${selectedCard === card.id ? "scale-105 ring-4 ring-rose-300" : "hover:scale-102"
                  }`}
                onClick={() => setSelectedCard(selectedCard === card.id ? null : card.id)}
              >
                <div className="flex items-center mb-4">
                  <Heart className="w-6 h-6 text-rose-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
                </div>

                {selectedCard === card.id ? (
                  <div className="animate-fade-in">
                    <p className="text-gray-700 leading-relaxed">{card.content}</p>
                    <div className="mt-4 flex justify-end">
                      <span className="text-rose-500 font-medium">Con todo mi amor ❤️</span>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500 italic">Haz click para leer esta carta especial...</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => setCurrentSection("home")}
            className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300"
          >
            Volver al Inicio
          </button>
        </div>
      </div>
    </div>
  )

  const renderMessages = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-emerald-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-600 mb-4">Déjame un Mensaje</h2>
          <p className="text-gray-700 text-lg">Comparte conmigo lo que sientes en este día especial</p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl mb-8">
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-semibold mb-3">Tu mensaje para mí:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full h-32 p-4 border-2 border-green-200 rounded-xl focus:border-green-400 focus:outline-none resize-none text-gray-700"
              placeholder="Escribe aquí lo que sientes... ❤️"
            />
          </div>

          <button
            onClick={handleSendMessage}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition-colors duration-300 flex items-center justify-center"
          >
            <Heart className="w-5 h-5 mr-2" />
            Enviar Mensaje de Amor
          </button>
        </div>

        {messages.length > 0 && (
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Tus Mensajes de Amor:</h3>
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className="bg-green-50 p-4 rounded-xl border-l-4 border-green-400">
                  <p className="text-gray-700">{msg}</p>
                  <span className="text-sm text-green-600 font-medium">💕 Con amor</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-center">
          <button
            onClick={() => setCurrentSection("home")}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300"
          >
            Volver al Inicio
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="font-sans">
      {currentSection === "home" && renderHome()}
      {currentSection === "photos" && renderPhotos()}
      {currentSection === "video" && renderVideo()}
      {currentSection === "cards" && renderCards()}
      {currentSection === "messages" && renderMessages()}

      {/* Floating hearts animation */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-pink-600 opacity-20 animate-float-${i + 1}`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              fontSize: `${Math.random() * 20 + 10}px`,
            }}
          />
        ))}
      </div>

      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300 opacity-30 animate-bounce text-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              fontSize: `${Math.random() * 15 + 10}px`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>
    </div>

  )
}
