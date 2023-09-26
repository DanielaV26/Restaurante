import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
import {MailIcon} from './MailIcon.jsx';
import {LockIcon} from './LockIcon.jsx';
import { LoginSvg } from "./LoginSvg.jsx";

export const LoginModal= () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <LoginSvg className="cursor-pointer w-10 h-10" onClick = {onOpen}/>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Iniciar sesión</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Ingresa tu email"
                  variant="bordered"
                />
                <Input
                  endContent={
                    <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Contraseña"
                  placeholder="Ingresa tu password"
                  type="password"
                  variant="bordered"
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Recuérdame
                  </Checkbox>
                  <Link className="text-green-500" href="#" size="sm">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button className="text-slate-600 hover:text-green-500 font-semibold border border-green-400" variant="flat" onPress={onClose}>
                  Registrarme
                </Button>
                <Button className="text-white font-semibold bg-gradient-to-r from-green-400 via-green-500 to-green-600 enabled:hover:bg-gradient-to-br focus:ring-green-300 dark:focus:ring-green-800  focus:ring-2"  onPress={onClose}>
                  Ingresar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
