var signo = prompt("Cual es tu signo?");

switch (signo){
    case 'aries':
        console.log('Sepa que debe tomar ya mismo esa decisión que viene postergando hace días. Cuenta con todo lo que necesita para cumplir los sueños de su vida.')
        break
    case 'tauro':
        console.log('Deberá asumir mejor las responsabilidades y determinarse nuevas tácticas dentro del ámbito profesional. Esto lo ayudará a alcanzar las metas rápidamente')
        break
    case 'geminis':
    case 'géminis':
        console.log('Propóngase efectuar nuevas tareas, de esta forma se le abrirá la mente a lo desconocido y podrá obtener como resultado experiencias muy positivas.')
        break
    case 'cancer':
    case 'cáncer':
        console.log('Mientras más intente que las cosas sucedan tal como desea, más obstáculos encontrará en su camino para concretarlas. Deje que todo fluya solo.')
        break
    case 'leo':
        console.log('Sepa que debe abandonar los problemas que no le afectan directamente en su vida profesional y personal. Procure tomar todos sus deseos de un modo constructivo.')
        break
    case 'virgo':
        console.log('Durante la tarde, su espíritu conciliador le permitirá resolver un problema que tiene hace tiempo con esas personas de su entorno inmediato.')
        break
    case 'libra':
        console.log('Será una fase óptima para reformar su vida personal. Recuerde que deberá controlar los repentinos cambios de personalidad que afectan a sus relaciones.')
        break
    case 'escorpio':
        console.log('Momento oportuno para que se obligue a buscar soluciones reales a los problemas que le surgen día a día. Sepa que no ganará nada con escaparse de los mismos.')
        break
    case 'sagitario':
        console.log('Aunque le cueste demasiado, intente sostener la autoestima alta, no claudique. Esto lo ayudará a obtener sus logros tan deseados y cumplir con sus propósitos.')
        break
    case 'capricornio':
        console.log('Esté preparado, ya que resurgirá la fuerza en su personalidad y se sentirá mas vital. Así, podrá eliminar los sentimientos negativos que ahondan en su interior.')
        break
    case 'acuario':
        console.log('Haga lo posible para acrecentar los vínculos familiares. Sepa que una simple llamada por teléfono con sus parientes lo mantendrá cerca de ellos.')
        break
    case 'picis':
        console.log('Prepárese, ya que sus conocimientos se convertirán en la base para la realización de esos nuevos proyectos. Procure pensar bien antes de realizar algún movimiento.')
        break
    default:
        console.log('signo zodical no valido')
}