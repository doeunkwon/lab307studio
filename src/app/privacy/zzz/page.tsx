import { PRIVACY_POLICY } from "@/constants/privacyPolicy";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Privacy() {
  return (
    <ScrollArea
      style={{ height: "calc(100vh - 108px)" }}
      className="flex flex-1"
    >
      <div className="max-w-2xl mx-auto p-4">
        <p className="whitespace-pre-wrap">{PRIVACY_POLICY}</p>
      </div>
    </ScrollArea>
  );
}
