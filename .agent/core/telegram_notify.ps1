# TELEGRAM NOTIFY — nucleo de comunicacao proativa
# Uso: . D:\AgentHub\core\telegram_notify.ps1
#      Send-EUvc "mensagem" "Sucesso|Erro|Alerta|Info"

$TELEGRAM_TOKEN   = "8628162112:AAHSQMmDL_P6sFzUgvQ3DGX5Rv2QjFRq9xU"
$TELEGRAM_CHAT    = "6431944169"
$NOTIFY_LOG       = "D:\AgentHub\logs\notificacoes.log"

function Send-EUvc {
    param(
        [string]$Mensagem,
        [string]$Nivel = "Info"
    )

    $icone = switch ($Nivel) {
        "Sucesso" { "OK" }
        "Erro"    { "ERRO" }
        "Alerta"  { "AVISO" }
        default   { "INFO" }
    }

    $ts   = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $texto = "[$icone] $Mensagem"

    # Telegram
    try {
        $body = @{ chat_id = $TELEGRAM_CHAT; text = $texto } | ConvertTo-Json
        Invoke-RestMethod -Uri "https://api.telegram.org/bot$TELEGRAM_TOKEN/sendMessage" -Method POST -Body $body -ContentType "application/json" -TimeoutSec 8 | Out-Null
    } catch {
        # Falhou Telegram — apenas loga
    }

    # Log sempre
    Add-Content -Path $NOTIFY_LOG -Value "[$ts] [$Nivel] $Mensagem" -Encoding UTF8
}
