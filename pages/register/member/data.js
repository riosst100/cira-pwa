import Link from 'next/link'
import Layout from '../../../components/LayoutSub'

export default function RegisterMemberData() {
  return (
    <Layout title="Cira App">
		<div className="flex items-center justify-center">
        <form id="form" className="w-full bg-white shadow-md rounded px-5 pt-6 pb-8">
            <div><img className="mx-auto" src="https://brebes-social.id/assets/images/logo/cira-blue.png" style={{ width: '70px' }} /></div>
            <h1 className="mt-2 block text-gray-700 font-bold mb-2 text-xl text-center">Daftar jadi member Cira</h1>
            <br/>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Nombre
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="name" id="name" type="text" placeholder="Ingresa tu nombre" required/>
            </div>
            
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Número de Celular
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="tel" id="tel" type="tel" placeholder="Ingresa tu Número de Celular" required/>
            </div>
            
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Correo
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="email" id="email" type="email" placeholder="Ingresa tu correo" required/>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Fecha
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="date" id="date" type="date" placeholder="Ingresa tu Fecha de Nacimiento" required/>
            </div>

            <div className="mb-4">

                <label className="block text-gray-700 text-sm font-bold mb-2">
                    ¿Pregunta 01?
                </label>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="message1" id="message1" type="text" placeholder="Escríbe tu respuesta Aquí..."required></textarea>
            </div>
            <div className="mb-4">

                <label className="block text-gray-700 text-sm font-bold mb-2">
                    ¿Pregunta 02?
                </label>
                
                <textarea className="bshadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="message2" id="message2" type="text" placeholder="Escríbe tu respuesta Aquí..." required></textarea>
            </div>
            <div className="flex items-center justify-between">
                <button id="submit"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit">
                    <i className="fab fa-whatsapp"></i> Enviar a WhatsApp
                </button>
            </div>
        </form>
    </div>
    </Layout>
  )
}
