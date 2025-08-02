import { useState } from 'react'
import { X, CreditCard, Smartphone, Copy, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const PaymentModal = ({ isOpen, onClose, product }) => {
  const [paymentMethod, setPaymentMethod] = useState('pix')
  const [copied, setCopied] = useState(false)
  
  const pixKey = "11999999999"
  const pixCode = "00020126580014BR.GOV.BCB.PIX013611999999999520400005303986540510.005802BR5925PORTAS AUTOMATICAS LTDA6009SAO PAULO62070503***6304ABCD"

  const copyPixCode = () => {
    navigator.clipboard.writeText(pixCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Finalizar Pagamento</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        {/* Product Info */}
        {product && (
          <div className="p-6 border-b border-gray-200">
            <h3 className="font-medium text-gray-800 mb-2">{product.name}</h3>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-green-600">{product.price}</span>
              <span className="text-sm text-gray-500">ou 12x sem juros</span>
            </div>
          </div>
        )}

        {/* Payment Methods */}
        <div className="p-6">
          <h4 className="font-medium text-gray-800 mb-4">Escolha a forma de pagamento:</h4>
          
          <div className="space-y-3 mb-6">
            <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="payment"
                value="pix"
                checked={paymentMethod === 'pix'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-3"
              />
              <Smartphone className="text-green-600 mr-3" size={24} />
              <div>
                <div className="font-medium">PIX</div>
                <div className="text-sm text-gray-600">Pagamento instantâneo - 5% de desconto</div>
              </div>
            </label>

            <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-3"
              />
              <CreditCard className="text-blue-600 mr-3" size={24} />
              <div>
                <div className="font-medium">Cartão de Crédito</div>
                <div className="text-sm text-gray-600">Parcelamento em até 12x sem juros</div>
              </div>
            </label>
          </div>

          {/* PIX Payment */}
          {paymentMethod === 'pix' && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <h5 className="font-medium text-green-800 mb-3">Pagamento via PIX</h5>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-green-700 mb-1">
                    Chave PIX (Telefone):
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={pixKey}
                      readOnly
                      className="flex-1 px-3 py-2 border border-green-300 rounded bg-white text-sm"
                    />
                    <Button
                      size="sm"
                      onClick={() => navigator.clipboard.writeText(pixKey)}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <Copy size={16} />
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-green-700 mb-1">
                    Código PIX Copia e Cola:
                  </label>
                  <div className="flex items-center space-x-2">
                    <textarea
                      value={pixCode}
                      readOnly
                      rows={3}
                      className="flex-1 px-3 py-2 border border-green-300 rounded bg-white text-xs resize-none"
                    />
                    <Button
                      size="sm"
                      onClick={copyPixCode}
                      className={`${copied ? 'bg-green-700' : 'bg-green-600 hover:bg-green-700'}`}
                    >
                      {copied ? <Check size={16} /> : <Copy size={16} />}
                    </Button>
                  </div>
                  {copied && (
                    <p className="text-xs text-green-600 mt-1">Código copiado!</p>
                  )}
                </div>
              </div>

              <div className="mt-4 p-3 bg-green-100 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Instruções:</strong>
                </p>
                <ol className="text-xs text-green-700 mt-1 space-y-1">
                  <li>1. Abra o app do seu banco</li>
                  <li>2. Escolha a opção PIX</li>
                  <li>3. Cole o código ou use a chave PIX</li>
                  <li>4. Confirme o pagamento</li>
                  <li>5. Envie o comprovante via WhatsApp</li>
                </ol>
              </div>
            </div>
          )}

          {/* Card Payment */}
          {paymentMethod === 'card' && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h5 className="font-medium text-blue-800 mb-3">Pagamento via Cartão</h5>
              <p className="text-sm text-blue-700 mb-4">
                Para pagamentos com cartão, entre em contato conosco via WhatsApp para processar sua compra com segurança.
              </p>
              <div className="space-y-2 text-xs text-blue-600">
                <p>✓ Parcelamento em até 12x sem juros</p>
                <p>✓ Aceitamos Visa, Mastercard, Elo</p>
                <p>✓ Processamento seguro</p>
                <p>✓ Confirmação imediata</p>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-3">
            {paymentMethod === 'pix' && (
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                onClick={() => {
                  const message = `Olá! Realizei o pagamento via PIX para o produto: ${product?.name || 'Kit para Porta Automática'}. Segue o comprovante em anexo.`
                  window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank')
                }}
              >
                Enviar Comprovante via WhatsApp
              </Button>
            )}

            {paymentMethod === 'card' && (
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => {
                  const message = `Olá! Gostaria de finalizar a compra do produto: ${product?.name || 'Kit para Porta Automática'} via cartão de crédito.`
                  window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank')
                }}
              >
                Finalizar via WhatsApp
              </Button>
            )}

            <Button 
              variant="outline" 
              className="w-full"
              onClick={onClose}
            >
              Cancelar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentModal

